import React, { ReactElement, useCallback, useRef } from 'react';
import FloatInput from '../Input/Input';
import singUpImg from '../../Assets/회원가입.png';
import fileUploadImg from '../../Assets/파일 업로드.png';
import characterImg from '../../Assets/캐릭터.svg';
import { useDropzone } from 'react-dropzone';
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
  const submit = () => {
    const formdata = new FormData();
    const name = nameRef.current?.value;
    const department = departmentRef.current?.value;
    const studentId = studentIDRef.current?.value;
    const phoneNumber = phoneRef.current?.value;
    const nickname = nickNameRef.current?.value;
    formdata.append('name', name ?? '');
    formdata.append('department', department ?? '');
    formdata.append('studentId', studentId ?? '');
    formdata.append('phoneNumber', phoneNumber ?? '');
    formdata.append('nickname', nickname ?? '');
    formdata.append('email', email ?? '');
    formdata.append('files', file ?? '');
    validationValue(formdata);
  };
  const validationValue = (formdata: FormData) => {
    if (
      !nameRef.current?.value ||
      !departmentRef.current?.value ||
      !studentIDRef.current?.value ||
      !phoneRef.current?.value ||
      !nickNameRef.current?.value
    ) {
      console.log('덜입력했다 씨발련아');
      return;
    } else {
      axios
        .post(
          'http://ucluverse-lb-285634398.ap-northeast-2.elb.amazonaws.com/user/signup',
          formdata,
        )
        .then((response) => {
          console.log('response : ', JSON.stringify(response, null, 2));
        })
        .catch((error) => {
          console.log('failed', error);
        });
    }
  };
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <img src={singUpImg} style={{ marginBottom: '40px' }}></img>
        <LoginDetailSpan>간단한 정보를 입력해주세요.</LoginDetailSpan>
        <LoginDetailSpan>동아리 신청에 편리하게 쓰인답니다.</LoginDetailSpan>
        <LoginInfoContainer>
          <InputContainer>
            <div>
              <FloatInput inputRef={nameRef} name="이름" />
              <FloatInput inputRef={studentIDRef} name="학번" />
            </div>
            <FloatInput inputRef={departmentRef} name="학과" />
            <FloatInput inputRef={phoneRef} name="전화번호" />
            <FloatInput inputRef={nickNameRef} name="닉네임" />
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
