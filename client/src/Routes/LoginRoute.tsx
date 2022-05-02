import React, { ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';

interface Props {
  children: ReactElement;
}

const LoginRoute = ({ children }: Props): React.ReactElement => {
  // const user = useResetRecoilState();
  // useCheckLogin()();
  const status = 'login';
  return status !== 'login' ? <Navigate to="/" /> : children;
};

export default LoginRoute;
