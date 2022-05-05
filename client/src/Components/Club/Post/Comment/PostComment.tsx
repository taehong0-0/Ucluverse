import React, { ReactElement } from 'react';
import { CommentContainer } from './style';
interface props {
  post: Post;
}
interface Post {
  title: string;
  content: string;
  time: string;
  boardName: string;
  likeNum: number;
  isLike: boolean;
  comment: any[];
}
const PostComment = (): ReactElement => {
  return <CommentContainer></CommentContainer>;
};
export default PostComment;
