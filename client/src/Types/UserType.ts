export interface UserType {
  userID: string;
  name: string;
  nickName: string | null;
  studentID: number | null;
  email: string | null;
  BDOList: String[] | null;
  isAdmin: boolean;
  profileImage: string | null;
  phoneNumber: string | null;
}
