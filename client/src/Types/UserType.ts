export interface UserType {
  userIdx: string;
  name: string;
  departmentIdx: number;
  nickname: string;
  studentID: number;
  email: string;
  BDOList?: String[] | null;
  isAdmin?: boolean;
  profileImage?: string;
  phoneNumber: string;
}
