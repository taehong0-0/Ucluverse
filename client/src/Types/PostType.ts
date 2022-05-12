export interface AwardPostType {
  clubIdx: number;
  clubName: string;
  awardName: string;
  awardTitle: string;
  awardContent: string;
  path: string;
}

export interface PostTitleType {
  title: string;
  author: string;
  type: string;
  date: string;
  postId: number;
}

export interface ActivityPostType {
  title: string;
  clubIdx: number;
  path: string;
  createdAt: string;
  postId: number;
}

export interface PostType {
  title: string;
  author: string;
  data: string;
  posdId: number;
  content: string;
  isLike: boolean;
}

export interface BoardType {
  name: string;
  boardIdx: number;
}
