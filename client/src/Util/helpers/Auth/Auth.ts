import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../../../Recoil/User';
import api from './Api';
import { getCookieToken, removeCookieToken, setRefreshToken } from './Cookie';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

export const onLogin = (email: String) => {
  api.get(`/auth/login?email=${email}`).then((res) => {
    if (res.data.status === 1) {
      window.location.replace(`/login/info?email=${email}`);
    } else {
      const { currentHashedRefreshToken, ...rest } = res.data.user;
      setRefreshToken(currentHashedRefreshToken);
      onLoginSuccess(rest);
      window.location.replace('/');
    }
  });
};

export const onLogout = () => {
  const [user, setUser] = useRecoilState(userState);
  api.get(`/auth/logout`).then((res) => {
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
    removeCookieToken();
    window.location.href = '/';
  });
};

export const onRefreshUpdate = () => {
  const refreshToken = getCookieToken();
  console.log(refreshToken);
  if (!refreshToken) {
    window.location.replace('/login');
    return false;
  }
  api
    .post('/silent-refresh', { refreshToken })
    .then(onLoginSuccess)
    .catch((error) => {});
  return true;
};

export const onLoginSuccess = (response: any) => {
  const setUser = useSetRecoilState(userState);
  const { accessToken, ...userData } = response.data.user;
  setUser(userData);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
