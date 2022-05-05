import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import userState from '../Recoil/User';

const useCheckLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const [status, setStatus] = useState(false);
  const checkLogin = async () => {
    if (user.userIdx !== 0) return true;
    else {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/isLogin`)
        .then((res) => {
          if (res.data.status === 1) {
            console.log(res.data.user);
            const { currentHashedRefreshToken, ...userData } = res.data.user;
            setUser(userData);
            setStatus(true);
          }
        });
      return status;
    }
  };
  return checkLogin;
};

export default useCheckLogin;
