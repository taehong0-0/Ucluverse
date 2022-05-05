import React, { ReactElement, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';

interface Props {
  children: ReactElement;
}

const LoginRoute = ({ children }: Props): React.ReactElement => {
  const [status, setStatus] = useState(false);
  const checkLogin = useCheckLogin();
  checkLogin().then((res) => setStatus(res));
  return status ? <Navigate to="/" /> : children;
};

export default LoginRoute;
