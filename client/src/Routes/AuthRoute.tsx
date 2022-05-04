import React, { ReactElement } from 'react';
import { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import useCheckLogin from '../Hooks/useCheckLogin';

interface Props {
  children: ReactElement;
}

const AuthRoute = ({ children }: Props): React.ReactElement => {
  const [status, setStatue] = useState(false);
  const checkLogin = useCheckLogin();
  checkLogin().then((res) => setStatue(res));
  return status ? children : <Navigate to="/login" />;
};

export default AuthRoute;
