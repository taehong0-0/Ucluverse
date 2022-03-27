import { useRecoilState } from 'recoil';
import userState from '../Recoil/user';
import axios from 'axios';

const useCheckLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const checkLogin = async () => {
    // return 'notLogin' 토큰 정보 없을 때
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user`).then((res) => {
      setUser(res.data.user);
    });
    // return 'requireInfo' 토큰정보 있는데 유저정보 없을 때
    // return 'login' 성공적으로 로그인 되었을 때
  };
  return () => {
    checkLogin();
  };
};

export default useCheckLogin;
