import React, { ReactElement, Suspense } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useCheckLogin from '../Hooks/useCheckLogin';
import { userDataState } from '../Recoil/User';

interface Props {
  children: ReactElement;
}

const AuthRoute = ({ children }: Props): React.ReactElement => {
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
  return status === 1 ? children : <Navigate to="/login" />;
};

export default AuthRoute;
