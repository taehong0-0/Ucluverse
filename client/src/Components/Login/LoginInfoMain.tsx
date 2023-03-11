import React, { ReactElement, useCallback, useRef } from 'react';
import FloatInput from '../Input/Input';
import singUpImg from '../../Assets/회원가입.png';
import fileUploadImg from '../../Assets/파일 업로드.png';
import characterImg from '../../Assets/캐릭터.svg';
import { useDropzone } from 'react-dropzone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
import { toast } from 'react-toastify';
import { departmentList } from '../../Util/constants/constant';
import { makeStyles, Theme } from '@mui/material';
import { useReducer } from 'react';
interface AvatarType {
  head: number;
  body: number;
  accessorie: number;
}
const LoginInfoMain = (): ReactElement => {
  const url = useLocation();
  const urlParams = new URLSearchParams(url.search);
  const email = urlParams.get('email');
  const [avatar, setAvatar] = useReducer(
    (prev: AvatarType, next: Partial<AvatarType>) => {
      const newAvatar = { ...prev, ...next };
      return newAvatar;
    },
    { head: 1, body: 1, accessorie: 1 },
  );
  // 정보 입력
  const nameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const [department, setDepartment] = useState<string>('');
  //image DropZone
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<Blob | null>(null);

  const changeAvatar = (type: keyof AvatarType, num: number) => {
    setAvatar({ [type]: num });
  };

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
  const handleChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value);
  };
  const checkValidInput = () => {
    if (
      !nameRef.current?.value ||
      department === '' ||
      !studentIDRef.current?.value ||
      !phoneRef.current?.value ||
      !nickNameRef.current?.value
    ) {
      toast('모든 정보를 입력해주세요', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    return true;
  };
  const submit = async () => {
    if (checkValidInput()) {
      const bodyData = new FormData();
      bodyData.append('name', nameRef.current!.value);
      bodyData.append('department', department);
      bodyData.append('studentID', studentIDRef.current!.value);
      bodyData.append('phone', phoneRef.current!.value);
      bodyData.append('nickName', nickNameRef.current!.value);
      bodyData.append('profilePhoto', file ?? '');
      bodyData.append('email', email ?? '');
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, bodyData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('response : ', JSON.stringify(response, null, 2));
          window.location.replace('/login');
        })
        .catch((error) => {
          console.log('failed', error);
        });
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} id="select-box">
              <InputLabel id="input-label">학과</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="select"
                value={department}
                onChange={handleChange}
                label="학과"
              >
                {departmentList.map((department) => (
                  <MenuItem value={department} key={department}>
                    {department}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FloatInput type="large" inputRef={phoneRef} name="전화번호" />
            <FloatInput type="large" inputRef={nickNameRef} name="닉네임" />
          </InputContainer>
          <ProfileContainer>
            <ImageContainer>
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
              <DropZoneDiv {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={fileUploadImg} width="30px" height="27px" />
                <span>파일업로드</span>
                <span>사진을 등록해주세요</span>
              </DropZoneDiv>
            </ImageContainer>
            <CharacterContainer>
              <img src={characterImg} width="140px" height="140px"></img>
              <div>
                <CharacterButton
                  content="머리"
                  type="head"
                  number={avatar.head}
                  maxNum={10}
                  setNumber={changeAvatar}
                ></CharacterButton>
                <CharacterButton
                  content="상의"
                  type="body"
                  number={avatar.body}
                  maxNum={10}
                  setNumber={changeAvatar}
                ></CharacterButton>
                <CharacterButton
                  content="악세사리"
                  type="accessorie"
                  number={avatar.accessorie}
                  maxNum={10}
                  setNumber={changeAvatar}
                ></CharacterButton>
              </div>
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
