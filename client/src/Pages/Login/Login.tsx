import React, { ReactElement } from 'react';
import { GApiProvider } from 'react-gapi-auth2';
import Header from '../../Components/Header/Header';
import LoginMain from '../../Components/Login/LoginMain';
const redirect = 'redirect';
const clientConfig = {
  client_id:
    '280889310353-qgqus8gdj4ir1t5c4qfghevolbj3d0th.apps.googleusercontent.com',
  cookie_policy: 'single_host_origin',
  scope: 'email profile',
  hosted_domain: 'ajou.ac.kr',
  // ux_mode: redirect,
  // redirect_uri: '/login/info',
  // etc...
};
const Login = (): ReactElement => {
  return (
    <GApiProvider clientConfig={clientConfig}>
      <Header />
      <LoginMain />
    </GApiProvider>
  );
};
export default Login;
