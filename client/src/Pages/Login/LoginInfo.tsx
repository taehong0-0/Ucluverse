import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

const LoginInfo = (): ReactElement => {
  const status = 'not-login';
  return status === 'not-login' ? (
    <Navigate to="/login" />
  ) : (
    <span>login info</span>
  );
};
export default LoginInfo;
