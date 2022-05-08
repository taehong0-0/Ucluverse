import React, { ReactElement, useCallback, useRef } from 'react';
import FloatInput from '../Input/Input';
import singUpImg from '../../Assets/회원가입.png';
import fileUploadImg from '../../Assets/파일 업로드.png';
import characterImg from '../../Assets/캐릭터.svg';
import { useDropzone } from 'react-dropzone';
import fs from 'fs';
import {
  CharacterContainer,
  DropZoneDiv,
  ImageContainer,
  InfoButtonContainer,
  InputContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginInfoContainer,
  LoginMainContainer,
  ProfileContainer,
} from './style';
import { useState } from 'react';
import CharacterButton from '../Button/CharacterButton';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AWS from 'aws-sdk';

const LoginInfoMain = (): ReactElement => {
  const url = useLocation();
  const urlParams = new URLSearchParams(url.search);
  const email = urlParams.get('email');
  const [head, setHead] = useState<number>(1);
  const [body, setBody] = useState<number>(1);
  const [accessorie, setAccessorie] = useState<number>(1);
  // 정보 입력
  const nameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  //image DropZone
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<Blob | null>(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      setFile(file);
      const bloburl = URL.createObjectURL(file);
      setImage(bloburl);
      console.log(image);
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const submit = async () => {
    if (
      !nameRef.current?.value ||
      !departmentRef.current?.value ||
      !studentIDRef.current?.value ||
      !phoneRef.current?.value ||
      !nickNameRef.current?.value
    ) {
      console.log('덜입력했다');
      return;
    } else {
      const option = {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: process.env.REACT_APP_AWS_REGION,
      };
      const s3 = new AWS.S3(option);
      const param = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME ?? '',
        ACL: 'public-read',
        ContentType: `image/jpeg`,
        Key: `user/profile/${new Date().toString()}.png`,
        Body: file ?? '',
      };
      if (file === null) {
        axios
          .post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
            name: nameRef.current.value,
            department: departmentRef.current.value,
            email,
            studentId: studentIDRef.current.value,
            phoneNumber: phoneRef.current.value,
            nickname: nickNameRef.current.value,
          })
          .then((response) => {
            console.log('response : ', JSON.stringify(response, null, 2));
            window.location.replace('/');
          })
          .catch((error) => {
            console.log('failed', error);
          });
      } else {
        await s3
          .upload(param)
          .promise()
          .then((data) => {
            axios
              .post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
                name: nameRef.current?.value,
                department: departmentRef.current?.value,
                email,
                studentId: studentIDRef.current?.value,
                phoneNumber: phoneRef.current?.value,
                nickname: nickNameRef.current?.value,
                profilePhotoPath: data.Location,
              })
              .then((response) => {
                console.log('response : ', JSON.stringify(response, null, 2));
                window.location.replace('/');
              })
              .catch((error) => {
                console.log('failed', error);
              });
          });
      }
    }
  };
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <img src={singUpImg} style={{ marginBottom: '2.5rem' }}></img>
        <LoginDetailSpan>간단한 정보를 입력해주세요.</LoginDetailSpan>
        <LoginDetailSpan>동아리 신청에 편리하게 쓰인답니다.</LoginDetailSpan>
        <LoginInfoContainer>
          <InputContainer>
            <div>
              <FloatInput type="large" inputRef={nameRef} name="이름" />
              <FloatInput type="large" inputRef={studentIDRef} name="학번" />
            </div>
            <FloatInput type="large" inputRef={departmentRef} name="학과" />
            <FloatInput type="large" inputRef={phoneRef} name="전화번호" />
            <FloatInput type="large" inputRef={nickNameRef} name="닉네임" />
          </InputContainer>
          <ProfileContainer>
            <ImageContainer>
              <DropZoneDiv {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={fileUploadImg} width="30px" height="27px" />
                <span>파일업로드</span>
                <span>사진을 등록해주세요</span>
              </DropZoneDiv>
              {image ? (
                <img src={image} width="140px" height="140px"></img>
              ) : (
                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    border: '1px solid black',
                  }}
                ></div>
              )}
            </ImageContainer>
            <CharacterContainer>
              <div>
                <CharacterButton
                  content="머리"
                  number={head}
                  maxNum={10}
                  setNumber={setHead}
                ></CharacterButton>
                <CharacterButton
                  content="상의"
                  number={body}
                  maxNum={10}
                  setNumber={setBody}
                ></CharacterButton>
                <CharacterButton
                  content="악세사리"
                  number={accessorie}
                  maxNum={10}
                  setNumber={setAccessorie}
                ></CharacterButton>
              </div>
              <img src={characterImg} width="140px" height="140px"></img>
            </CharacterContainer>
          </ProfileContainer>
        </LoginInfoContainer>
        <InfoButtonContainer>
          <button>
            <span>취소</span>
          </button>
          <button onClick={() => submit()}>
            <span>확인</span>
          </button>
        </InfoButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginInfoMain;
