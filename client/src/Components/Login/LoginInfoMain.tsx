import React, { ReactElement } from 'react';
import googleImg from '../../Assets/구글로그인.png';
import {
  LoginButtonContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginMainContainer,
  LoginSpan,
} from './style';

const LoginMain = (): ReactElement => {
  const status = 'notLogin';
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <LoginSpan>회원가입</LoginSpan>
        <LoginDetailSpan>간단한 정보를 입력해주세요.</LoginDetailSpan>
        <LoginDetailSpan>동아리 신청에 편리하게 쓰인답니다.</LoginDetailSpan>
        <LoginButtonContainer>
          <button>
            <img src={googleImg} width="304px" height="45px" />
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
