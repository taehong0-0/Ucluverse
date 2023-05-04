/* eslint-disable no-useless-escape */
import { useCallback, useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
import AWS from 'aws-sdk';
import { ClubType } from '../../../../Types/ClubType';
import fileUploadImg from '../../../../Assets/파일 업로드.png';
import Button from '../../../Button/Button';
import DropZone from '../../../DropZone/DropZone';
import { AdminMainContainer, BodyContainer } from './style';

interface Props {
  club: ClubType | null;
  clubId: number;
}
function AdminMain(props: Props): ReactElement {
  const { club, clubId } = props;
  const [tag, setTag] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<Blob | null>(null);
  useEffect(() => {
    setTag(club?.clubCategories.join(',') ?? '');
    setIntroduce(club?.introductionDesc ?? '');
  }, [club]);
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
  const submit = () => {
    if (file) {
      s3.upload(param)
        .promise()
        .then((data) => {
          axios.patch(`${process.env.REACT_APP_SERVER_URL}/clubs/${clubId}`, {
            introductionDesc: introduce,
            logoPath: data.Location,
            categories: tag.split(/[\s,/\|]+/),
          });
        });
    } else {
      axios.patch(`${process.env.REACT_APP_SERVER_URL}/clubs/${clubId}`, {
        introductionDesc: introduce,
        logoPath: club?.logoPath ?? '',
        categories: tag.split(/[\s,/\|]+/),
      });
    }
  };
  const onChangeTag = useCallback((e) => setTag(e.target.value), []);
  const onChangeIntroduce = useCallback((e) => setIntroduce(e.target.value), []);
  return (
    <AdminMainContainer>
      <span>동아리 정보</span>
      <BodyContainer>
        <div>
          <span>동아리 주소</span>
          <span>{`https://ucluverse.com/club/${clubId}`}</span>
        </div>
        <div>
          <span>동아리명</span>
          <span>{club?.name}</span>
        </div>
        <div>
          <span>태그</span>
          <input type="text" value={tag} onChange={onChangeTag} />
        </div>
        <div className="introduce">
          <span>소개글</span>
          <textarea value={introduce} onChange={onChangeIntroduce} />
        </div>
        <div className="poster">
          <span>홍보포스터</span>
          <DropZone setFile={setFile} setImage={setImage}>
            {!image && !club?.logoPath ? (
              <img alt="" src={fileUploadImg} width="30px" height="27px" />
            ) : image ? (
              <img
                src={image ?? undefined}
                style={{
                  width: '16.5rem',
                  height: '8.938rem',
                  marginBottom: '15px',
                  borderRadius: '5px',
                }}
              />
            ) : (
              <img
                src={club?.logoPath ?? undefined}
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
      </BodyContainer>
      <Button name="확인" clickEvent={submit} />
    </AdminMainContainer>
  );
}
export default AdminMain;
