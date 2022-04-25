import React, { ReactElement } from 'react';
import { HeaderContainer } from './style';
import test1 from '../../../../Assets/test1.jpeg';

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
const PostHeader = (props: props): ReactElement => {
  const { post } = props;
  return (
    <HeaderContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>{post.boardName}</span>
          <span>{'>'}</span>
          <span>{post.title}</span>
        </div>
        <span id="title">{post.title}</span>
        <span id="time">{post.time}</span>
      </div>
      <div>
        <div>
          <span className="normal">회원</span>
          <span>작성자이름이다</span>
        </div>
        <img src={test1} width="90px" height="90px"></img>
      </div>
    </HeaderContainer>
  );
};
export default PostHeader;
