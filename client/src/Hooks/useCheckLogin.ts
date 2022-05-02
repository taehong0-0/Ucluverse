import axios from 'axios';
import { useRecoilState } from 'recoil';
import userState from '../Recoil/user';

const useCheckLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const checkLogin = async () => {
    if (!user?.email) return false;
    else {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/auth/login?email=${user?.email}`,
      );
      return res.data;
      // axios
      //   .get(
      //     `${process.env.REACT_APP_SERVER_URL}/auth/login?email=${user?.email}`,
      //   )
      //   .then((res) => {
      //     if (res.data.status === 2) {
      //       // setUser()
      //       return true;
      //     }
      //     return false;
      //   });
      // return 'notLogin' 토큰 정보 없을 때
      // return 'requireInfo' 토큰정보 있는데 유저정보 없을 때
      // return 'login' 성공적으로 로그인 되었을 때
    }
  };
  return checkLogin;
};

export default useCheckLogin;
