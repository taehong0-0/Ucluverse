import axios from 'axios';
import React, { ReactElement } from 'react';
import { useGoogleAuth, useGoogleUser } from 'react-gapi-auth2';
import googleImg from '../../Assets/구글로그인.png';
import singInImg from '../../Assets/로그인.png';
import {
  LoginButtonContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginMainContainer,
} from './style';

const LoginMain = (): ReactElement => {
  const status = 'notLogin';
  const { googleAuth } = useGoogleAuth();
  const { currentUser } = useGoogleUser();
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <img src={singInImg} style={{ marginBottom: '40px' }}></img>
        <LoginDetailSpan>유클러버스 회원가입은</LoginDetailSpan>
        <LoginDetailSpan>구글 아이디 연동을 통해 진행됩니다.</LoginDetailSpan>
        <LoginDetailSpan>아주메일로 로그인을 진행해주세요</LoginDetailSpan>
        <LoginButtonContainer>
          <button onClick={() => googleAuth?.signIn()}>
            <img src={googleImg} width="304px" height="45px" />
          </button>
          <button
            onClick={() =>
              console.log(currentUser?.getBasicProfile().getEmail())
            }
          >
            aaaa
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
