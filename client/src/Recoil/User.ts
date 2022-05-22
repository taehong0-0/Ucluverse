import axios from 'axios';
import { atom, selector } from 'recoil';
import { UserType } from '../Types/UserType';

export const userState = atom<UserType>({
  key: 'userState',
  default: {
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
    starredClubs: [],
  },
});

export const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/isLogin`);
    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userState, newValue as UserType);
  },
});
