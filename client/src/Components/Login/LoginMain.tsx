import axios from 'axios';
import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import googleImg from '../../Assets/구글로그인.png';
import singInImg from '../../Assets/로그인.png';
import {
  LoginButtonContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginMainContainer,
} from './style';

declare global {
  interface Window {
    gapi: any;
  }
}

const LoginMain = () => {
  const status = 'notLogin';
  const gapi = window.gapi;
  const init = () => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        hosted_domain: 'ajou.ac.kr',
        client_id:
          '280889310353-qgqus8gdj4ir1t5c4qfghevolbj3d0th.apps.googleusercontent.com',
      });
      const options = new gapi.auth2.SigninOptionsBuilder();
      options.setPrompt('select_account');
      options.setScope('email profile');
      gapi.auth2
        .getAuthInstance()
        .attachClickHandler(
          'GgCustomLogin',
          options,
          onSignIn,
          onSignInFailure,
        );
    });
  };
  const onSignIn = async (googleUser: any) => {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();
    axios.get(`http://localhost:4000/auth/login?email=${email}`).then((res) => {
      res.data.status === 1
        ? (window.location.href = `/login/info`)
        : (window.location.href = `/`);
    });
  };
  const onSignInFailure = (t: any) => {
    console.log(t);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <img src={singInImg} style={{ marginBottom: '40px' }}></img>
        <LoginDetailSpan>유클러버스 회원가입은</LoginDetailSpan>
        <LoginDetailSpan>구글 아이디 연동을 통해 진행됩니다.</LoginDetailSpan>
        <LoginDetailSpan>아주메일로 로그인을 진행해주세요</LoginDetailSpan>
        <LoginButtonContainer>
          <button id="GgCustomLogin">
            <img src={googleImg} width="304px" height="45px" />
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
