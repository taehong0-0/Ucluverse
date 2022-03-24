import React, { ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

interface Props {
  children: ReactElement;
}

const LoginRoute = ({ children }: Props): React.ReactElement => {
  // const user = useResetRecoilState();
  const status = 'login';
  return status !== 'login' ? <Navigate to="/" /> : children;
};

export default LoginRoute;
