import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userDataState } from '../Recoil/User';

const useCheckLogin = () => {
  const [userData, setUserData] = useRecoilState<any>(userDataState);
  if (userData.status === 1) {
    setUserData(userData.user);
  } else {
    setUserData({
      userIdx: 0,
      name: '',
      departmentIdx: 0,
      nickname: '',
      studentId: 0,
      email: '',
      BDOList: null,
      isAdmin: false,
      profilePhoto: '',
      phoneNumber: '',
    });
  }
  return userData.status;
};

export default useCheckLogin;
