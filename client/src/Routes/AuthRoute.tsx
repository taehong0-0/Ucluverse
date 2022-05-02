import React, { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';
import userState from '../Recoil/user';

interface Props {
  children: ReactElement;
}

const AuthRoute = ({ children }: Props): React.ReactElement => {
  const [user, setUser] = useRecoilState(userState);
  const [status, setStatue] = useState(false);
  const checkLogin = useCheckLogin();
  useEffect(() => {
    checkLogin().then((res) => setStatue(res));
  });
  return status ? children : <Navigate to="/login" />;
};

export default AuthRoute;
