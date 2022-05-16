import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactElement, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { ClubType } from '../../../../Types/ClubType';
import fileUploadImg from '../../../../Assets/파일 업로드.png';
import Button from '../../../Button/Button';
import DropZone from '../../../DropZone/DropZone';
import { AdminMainContainer, BodyContainer, DropZoneDiv } from './style';
interface Props {
  club: ClubType | null;
  clubId: number;
}
const AdminMain = (props: Props): ReactElement => {
  const { club, clubId } = props;
  const [tag, setTag] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<Blob | null>(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      setFile(file);
      const bloburl = URL.createObjectURL(file);
      setImage(bloburl);
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const submit = () => {
    console.log(introduce);
  };
  useEffect(() => {
    setTag(club?.clubCategories.join(',') ?? '');
    setIntroduce(club?.introductionDesc ?? '');
  }, [club]);
  const onChangeTag = useCallback((e) => setTag(e.target.value), []);
  const onChangeIntroduce = useCallback(
    (e) => setIntroduce(e.target.value),
    [],
  );
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
          <textarea value={introduce} onChange={onChangeIntroduce}></textarea>
        </div>
        <div className="poster">
          <span>홍보포스터</span>
          <DropZone setFile={setFile} setImage={setImage}>
            {!image && !club?.logoPath ? (
              <img src={fileUploadImg} width="30px" height="27px" />
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
      <Button name="확인" clickEvent={submit}></Button>
    </AdminMainContainer>
  );
};
export default AdminMain;
