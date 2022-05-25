import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import Introduce from '../../Components/Footer/Introduce';
import Footer from '../../Components/Footer/Footer';

import 'react-toastify/dist/ReactToastify.css';
import Header from '../../Components/Header/Header';
import LoginMain from '../../Components/Login/LoginMain';
const Login = (): ReactElement => {
  return (
    <>
      <div>
        <Header />
        <LoginMain />
      </div>
      <Introduce />
      <Footer />
    </>
  );
};
export default Login;
