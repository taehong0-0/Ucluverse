import axios from 'axios';
import { getCookieToken, removeCookieToken, setRefreshToken } from './Cookie';

// url 호출 시 기본 값 셋팅
const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
  headers: { 'Content-type': 'application/json' }, // data type
});

api.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === 'refresh_token expired') {
        removeCookieToken();
        window.location.replace('/login');
      } else if (error.response.data.message === 'expired') {
        const originalRequest = config;
        const prevRefreshToken = getCookieToken();
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/refresh`,
          {},
          { headers: { authorization: `Bearer ${prevRefreshToken}` } },
        );
        // 새로운 토큰 저장
        const { accessToken, refreshToken } = data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setRefreshToken(refreshToken);
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest);
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response error', error);
    return Promise.reject(error);
  },
);

export default api;
