import React, { ReactElement } from 'react';
import { PostType } from '../../../../Types/PostType';
import { PostMainContainer } from './style';
interface props {
  post: PostType | null;
}

const PostMain = (props: props): ReactElement => {
  const { post } = props;

  return (
    <PostMainContainer>
      <span dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </PostMainContainer>
  );
};
export default PostMain;
