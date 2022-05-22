import { UserType } from 'aws-sdk/clients/workdocs';

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
  path: string | null;
  createdAt: string;
  postingIdx: number;
}

export interface ActivityPostType {
  title: string;
  clubIdx: number;
  path: string;
  createdAt: string;
  postId: number;
}

export interface PostType {
  postingIdx: number;
  title: string;
  author: string;
  createAt: string;
  content: string;
  isLike: boolean;
  likesNum: number;
  boardName: string;
  comments: any[];
  isPublic: boolean;
  allowComments: boolean;
  images: string[];
}

export interface BoardType {
  name: string;
  boardIdx: number;
}
