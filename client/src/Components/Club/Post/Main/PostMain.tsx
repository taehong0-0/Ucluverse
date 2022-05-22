import React, { ReactElement } from 'react';
import { PostType } from '../../../../Types/PostType';
import { PostMainContainer } from './style';
interface props {
  post: PostType | null;
}

const PostMain = (props: props): ReactElement => {
  return <PostMainContainer></PostMainContainer>;
};
export default PostMain;
