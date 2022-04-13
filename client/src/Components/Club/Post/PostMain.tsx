import React, { ReactElement } from 'react';
import { PostMainContainer } from './style';
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
const PostMain = (props: props): ReactElement => {
  return <PostMainContainer></PostMainContainer>;
};
export default PostMain;
