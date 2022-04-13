import React, { ReactElement } from 'react';

import Header from '../../Components/Header/Header';
import LoginMain from '../../Components/Login/LoginMain';
const Login = (): ReactElement => {
  return (
    <div>
      <Header />
      <LoginMain />
    </div>
  );
};
export default Login;
