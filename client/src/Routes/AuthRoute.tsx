import React, { ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

interface Props {
  children: ReactElement;
}

const AuthRoute = ({ children }: Props): React.ReactElement => {
  // const user = useResetRecoilState();
  const user = null;
  if (!user) return <Navigate to="/login" />;

  return user ? children : <Navigate to="/login" />;
};

export default AuthRoute;
