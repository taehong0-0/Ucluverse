import { atom } from 'recoil';
import { ClubType } from '../Types/ClubType';

export const ClubListState = atom<ClubType[]>({
  key: 'ClubListState',
  default: [],
});

export const DepartmentListState = atom<ClubType[]>({
  key: 'DepartmentListState',
  default: [],
});
