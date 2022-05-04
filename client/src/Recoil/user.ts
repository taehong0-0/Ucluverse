import { atom } from 'recoil';
import { UserType } from '../Types/UserType';

const userState = atom<UserType>({
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
    profileImage: '',
    phoneNumber: '',
  },
});

export default userState;
