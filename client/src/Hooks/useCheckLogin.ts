import { useRecoilState } from 'recoil';
import { userState } from '../Recoil/User';
import api from '../Util/helpers/Auth/Api';

const useCheckLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  api.get(`/auth/isLogin`).then((res) => {
    if (res.status === 1) {
      setUser(res.data.user);
    } else {
      setUser({
        userIdx: 0,
        name: '',
        departmentIdx: 0,
        nickname: '',
        studentId: 0,
        email: '',
        BODList: null,
        isAdmin: false,
        profilePhoto: '',
        phoneNumber: '',
        starredClubs: [],
      });
    }
  });
  return user.userIdx === 0 ? false : true;
};

export default useCheckLogin;
