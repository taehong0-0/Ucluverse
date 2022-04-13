import React, { ReactElement } from 'react';
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
  return <div></div>;
};
export default PostComment;
