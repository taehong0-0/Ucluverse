import React, { ReactElement } from 'react';
import { PostType } from '../../../../Types/PostType';
import { PostMainContainer } from './style';

interface IProps {
  post: PostType | null;
}

function PostMain(props: IProps): ReactElement {
  const { post } = props;

  return (
    <PostMainContainer>
      <span dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </PostMainContainer>
  );
}
export default PostMain;
