import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  useLocation();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const boardId = urlParams.get('boardId');

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
