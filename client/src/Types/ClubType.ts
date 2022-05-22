export interface ClubType {
  clubIdx: number;
  name: string;
  clubCategories: string[];
  department: string | null;
  clubType: string;
  logoPath: string | null;
  boardList: Board[];
  introductionPath: string;
  introductionDesc: string;
}
export interface DepartmentType {
  collegeIdx: number;
  departmentIdx: number;
  name: string;
}
type Board = { [key in string]: number };
