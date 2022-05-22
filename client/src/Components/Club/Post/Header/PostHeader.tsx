import React, { ReactElement } from 'react';
import { HeaderContainer } from './style';
import test1 from '../../../../Assets/test1.jpeg';
import { PostType } from '../../../../Types/PostType';

interface props {
  post: PostType | null;
}
const PostHeader = (props: props): ReactElement => {
  const { post } = props;
  return (
    <HeaderContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>{post?.boardName}</span>
          <span>{'>'}</span>
          <span>{post?.title}</span>
        </div>
        <span id="title">{post?.title}</span>
        <span id="time">{post?.createAt.slice(0, 10)}</span>
      </div>
      <div>
        <div>
          <span className="normal">회원</span>
          <span>{post?.author}</span>
        </div>
        <img src={test1} width="5.625rem" height="5.625rem"></img>
      </div>
    </HeaderContainer>
  );
};
export default PostHeader;
