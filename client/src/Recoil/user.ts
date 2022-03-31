import { atom } from 'recoil';
import { UserType } from '../Types/UserType';

const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
});

export default userState;
