import React, { ReactElement, Suspense, useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';
import { userDataState } from '../Recoil/User';

interface Props {
  children: ReactElement;
}

const LoginRoute = ({ children }: Props): React.ReactElement => {
  // const [userData, setUserData] = useRecoilState<any>(userDataState);
  // if (userData.status === 1) {
  //   setUserData(userData.user);
  // } else {
  //   setUserData({
  //     userIdx: 0,
  //     name: '',
  //     departmentIdx: 0,
  //     nickname: '',
  //     studentId: 0,
  //     email: '',
  //     BDOList: null,
  //     isAdmin: false,
  //     profilePhoto: '',
  //     phoneNumber: '',
  //   });
  // }
  const status = useCheckLogin();
  return status === 1 ? <Navigate to="/" /> : children;
};

export default LoginRoute;
