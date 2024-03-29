import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { HeaderContainer } from './style';
import { PostType } from '../../../../Types/PostType';
import { userState } from '../../../../Recoil/User';

interface IProps {
  post: PostType | null;
}
function PostHeader(props: IProps): ReactElement {
  const user = useRecoilValue(userState);
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
        <span id="time">{post?.createAt?.slice(0, 10)}</span>
      </div>
      <div className="info">
        <div>
          {post?.author.name === user.name ? (
            <span className="writer">작성자</span>
          ) : (
            <span className="normal">회원</span>
          )}
          <span>{post?.author.name}</span>
        </div>
        {post?.author.profilePhoto ? (
          <img alt="" src={post.author.profilePhoto} width="90px" height="90px" />
        ) : (
          <div />
        )}
      </div>
    </HeaderContainer>
  );
}
export default PostHeader;
