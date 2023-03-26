import axios from 'axios';
import { onRefreshUpdate } from './Auth';
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
      if (error.response.data.message === 'expired') {
        if (onRefreshUpdate()) {
          return axios(config);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
