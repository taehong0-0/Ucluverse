import React, { ReactElement, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostTitle from '../../Post/PostTitle';
import { ClubBoardContainer } from './style';
const posts = [
  {
    title: '공지사항',
    author: '작성자다',
    type: '공지사항',
    date: '04.12',
    postId: 1,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 2,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 3,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 4,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 5,
  },
];
const ClubBoard = (): ReactElement => {
  const url = useLocation();
  const urlParams = new URLSearchParams(url.search);
  const boardId = urlParams.get('boardId');
  // todo : boardId로 해당하는 board의 데이터 가져오기

  return (
    <ClubBoardContainer>
      {posts.map((post) => (
        <PostTitle
          title={post.title}
          author={post.author}
          date={post.date}
          type={post.type}
          postId={post.postId}
        ></PostTitle>
      ))}
    </ClubBoardContainer>
  );
};
export default ClubBoard;
