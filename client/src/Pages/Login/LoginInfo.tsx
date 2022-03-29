import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import LoginInfoMain from '../../Components/Login/LoginInfoMain';
const LoginInfo = (): ReactElement => {
  return (
    <div>
      <Header />
      <LoginInfoMain />
    </div>
  );
};
export default LoginInfo;
