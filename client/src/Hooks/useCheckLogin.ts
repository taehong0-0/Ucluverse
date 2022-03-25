import { useRecoilState } from 'recoil';
import userState from '../Recoil/user';
import axios from 'axios';

const useCheckLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const checkLogin = async () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/google`).then((res) => {
      setUser(res.data.user);
    });
  };
  return () => {
    checkLogin();
  };
};

export default useCheckLogin;
