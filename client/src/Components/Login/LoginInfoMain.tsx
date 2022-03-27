import React, { ReactElement, useRef } from 'react';
import googleImg from '../../Assets/구글로그인.png';
import FloatInput from '../Input/Input';
import {
  InputContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginInfoContainer,
  LoginMainContainer,
  LoginSpan,
} from './style';

const LoginMain = (): ReactElement => {
  const status = 'notLogin';
  const nameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);

  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <LoginSpan>회원가입</LoginSpan>
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
        </LoginInfoContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
