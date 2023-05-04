import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import AWS from 'aws-sdk';
import { toast } from 'react-toastify';
// import { useRecoilValue } from 'recoil';
import Button from '../../../Button/Button';
import FloatInput from '../../../Input/Input';
import { AwardBoardContainer, AwardListContainer } from './style';
import fileUploadImg from '../../../../Assets/파일 업로드.png';
import { AwardPostType } from '../../../../Types/PostType';
import DropZone from '../../../DropZone/DropZone';
import useCheckRole from '../../../../Hooks/useCheckRole';
// import { userState } from '../../../../Recoil/User';
import api from '../../../../Util/helpers/Auth/Api';

interface Props {
  clubId: number;
}
function AwardBoard(props: Props) {
  const { clubId } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const awardNameRef = useRef<HTMLInputElement>(null);
  const awardTitleRef = useRef<HTMLInputElement>(null);
  const awardContentRef = useRef<HTMLTextAreaElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<Blob | null>(null);
  const [awardPosts, setAwardPosts] = useState<AwardPostType[]>([]);
  // const user = useRecoilValue(userState);
  const status = useCheckRole(clubId);
  const option = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
  };
  const s3 = new AWS.S3(option);
  const param = {
    Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME ?? '',
    ACL: 'public-read',
    ContentType: 'image/jpeg',
    Key: `user/profile/${new Date().toString()}.png`,
    Body: file ?? '',
  };
  const notify = () =>
    toast('모든 정보를 입력해주세요', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const submit = async () => {
    if (
      !(awardNameRef.current && awardNameRef.current.value !== '') ||
      !(awardTitleRef.current && awardTitleRef.current.value !== '') ||
      !(awardContentRef.current && awardContentRef.current.value !== '') ||
      !image
    ) {
      notify();
    } else {
      await s3
        .upload(param)
        .promise()
        .then((data) => {
          axios
            .post(`${process.env.REACT_APP_SERVER_URL}/awards`, {
              clubIdx: clubId,
              competitionName: awardTitleRef.current?.value,
              awardName: awardNameRef.current?.value,
              content: awardContentRef.current?.value,
              path: data.Location,
            })
            .then(() => {
              setImage(null);
              setFile(null);
              setIsOpen(false);
            });
        });
    }
  };
  const handleModalClose = (e: MouseEvent) => {
    if (isOpen && !modalRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
      setImage(null);
    }
  };
  useEffect(() => {
    api.get(`/awards/club/${clubId}`).then((res) => {
      setAwardPosts(res.data.res.awards);
    });
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    } else {
      api.get(`/awards/club/${clubId}`).then((res) => {
        setAwardPosts(res.data.res.awards);
      });
    }
    window.addEventListener('click', handleModalClose);
    return () => {
      window.removeEventListener('click', handleModalClose);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isOpen]);
  const singUpClick = () => {
    if (status === 0) {
      setIsOpen(true);
    } else {
      toast('회원이 아닙니다.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <AwardBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>수상 게시판</span>
        </div>
        <AwardListContainer>
          {awardPosts.map((award) => (
            <div key={award.awardTitle}>
              <img alt="" src={award.path} />
              <div>
                <span>{award.awardName}</span>
                <span>
                  <pre>{award.awardContent}</pre>
                </span>
              </div>
            </div>
          ))}
        </AwardListContainer>
      </div>
      <Button name="등록" clickEvent={() => singUpClick()} />
      {isOpen && (
        <div className="modal-background">
          <div className="modal" ref={modalRef}>
            <span>수상 내역 등록</span>
            <div>
              <div>
                <FloatInput inputRef={awardTitleRef} name="대회" type="midium" />
                <FloatInput inputRef={awardNameRef} name="상" type="midium" />
                <span>사진</span>
                <DropZone setFile={setFile} setImage={setImage}>
                  {!image ? (
                    <img alt="" src={fileUploadImg} width="30px" height="27px" />
                  ) : (
                    <img
                      src={image}
                      style={{
                        width: '16.5rem',
                        height: '8.938rem',
                        marginBottom: '15px',
                        borderRadius: '5px',
                      }}
                    />
                  )}
                </DropZone>
              </div>
              <div>
                <span>내용</span>
                <textarea ref={awardContentRef} />
              </div>
            </div>
            <div>
              <Button clickEvent={() => submit()} name="확인" />
              <button onClick={() => setIsOpen(false)}>
                <span>취소</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </AwardBoardContainer>
  );
}
export default AwardBoard;
