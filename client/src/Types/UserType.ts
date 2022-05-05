export interface UserType {
  userIdx: number;
  name: string;
  departmentIdx: number;
  nickname: string;
  studentId: number;
  email: string;
  BDOList?: String[] | null;
  isAdmin?: boolean;
  profilePhoto?: string;
  phoneNumber: string;
}
