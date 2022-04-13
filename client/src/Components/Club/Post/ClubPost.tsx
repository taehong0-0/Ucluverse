import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, PostContainer } from './style';
import test1 from '../../../Assets/test1.jpeg';
import PostHeader from './PostHeader';
import PostMain from './PostMain';
const ClubPost = (): ReactElement => {
  const url = useLocation();
  const urlParams = new URLSearchParams(url.search);
  const postId = urlParams.get('postId');
  console.log(postId);
  //제목, 작성자, 작성시간, 게시판, 좋아요 수, 유저의 좋아요 유무, 댓글, 내용
  const post = {
    title: '더미데이터',
    content: '너네 자랑하고 싶은거 있음 얼마든지 해',
    time: '22.04.28 11:50',
    boardName: '자유게시판',
    likeNum: 15,
    isLike: true,
    comment: [],
  };
  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostMain post={post} />
    </PostContainer>
  );
};
export default ClubPost;
