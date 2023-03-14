import { useEffect } from 'react';
import singInImg from '../../Assets/로그인.png';
import { toast } from 'react-toastify';
import { LoginButtonContainer, LoginContentContainer, LoginDetailSpan, LoginMainContainer } from './style';
import GoogleIcon from '../../Assets/icon/g-logo.png';
import { onLogin } from '../../Util/helpers/Auth/Auth';

declare global {
  interface Window {
    gapi: any;
  }
}

const LoginMain = () => {
  const notify = () =>
    toast('아주메일로 로그인 해주세요', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const gapi = window.gapi;
  const init = () => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      });
      const options = new gapi.auth2.SigninOptionsBuilder();
      options.setPrompt('select_account');
      options.setScope('email profile');
      gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
    });
  };
  const checkAjouMail = (email: string) => {
    return email.includes('@ajou.ac.kr');
  };
  const onSignIn = async (googleUser: any) => {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();

    if (checkAjouMail(email)) {
      onLogin(email);
    } else {
      notify();
    }
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
        <img src={singInImg} style={{ marginBottom: '2.5rem' }}></img>
        <LoginDetailSpan>유클러버스 회원가입은</LoginDetailSpan>
        <LoginDetailSpan>구글 아이디 연동을 통해 진행됩니다.</LoginDetailSpan>
        <LoginDetailSpan>아주메일로 로그인을 진행해주세요</LoginDetailSpan>
        <LoginButtonContainer>
          <button id="GgCustomLogin">
            <img src={GoogleIcon} />
            <p>구글 로그인</p>
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
