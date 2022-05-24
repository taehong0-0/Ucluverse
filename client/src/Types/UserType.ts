export interface UserType {
  userIdx: number;
  name: string;
  departmentIdx: number;
  nickname: string;
  studentId: number;
  email: string;
  BODList?: number[] | null;
  isAdmin?: boolean;
  profilePhoto?: string;
  phoneNumber: string;
  starredClubs: number[];
}
