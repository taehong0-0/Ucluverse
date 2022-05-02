export interface UserType {
  userIdx: string;
  name: string;
  departmentIdx: number;
  nickname: string | null;
  studentID: number | null;
  email: string | null;
  BDOList: String[] | null;
  isAdmin: boolean;
  profileImage: string | null;
  phoneNumber: string | null;
}
