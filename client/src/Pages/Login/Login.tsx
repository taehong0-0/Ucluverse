import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
