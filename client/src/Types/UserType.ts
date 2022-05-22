export interface UserType {
  userIdx: number;
  name: string;
  departmentIdx: number;
  nickname: string;
  studentId: number;
  email: string;
  BDOList?: number[] | null;
  isAdmin?: boolean;
  profilePhoto?: string;
  phoneNumber: string;
  starredClubs: number[];
}
