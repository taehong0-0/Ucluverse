import React, { ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';

interface Props {
  children: ReactElement;
}

const AuthRoute = ({ children }: Props): React.ReactElement => {
  // const user = useResetRecoilState();
  const checkLogin = useCheckLogin();
  const status = 'login';
  return status === 'login' ? children : <Navigate to="/login" />;
};

export default AuthRoute;
