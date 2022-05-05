export interface Club {
  clubIdx: number;
  name: string;
  categoryList: string[];
  collegeIdx: number | null;
  departmentIdx: number | null;
  clubType: string;
  logoPath: string;
  boardList: Board[];
}

export interface Board {
  clubBoardIdx: number;
  boardName: string;
}

export interface ClubAward {
  clubName: string;
  clubIdx: number;
  competitionName: string;
  awardName: string;
  path: string;
  content: string;
}

export interface ClubInfoWithPhoto {
  clubIdx: number;
  path: string;
}
