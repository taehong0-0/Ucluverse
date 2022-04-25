import React, { ReactElement } from 'react';
import ActivityBoard from './ActivityBoard/ActivityBoard';
import InfoBoard from './InfoBoard/InfoBoard';
import PostBoard from './PostBoard/PostBoard';
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
interface props {
  boardIdx: Number;
  clubId: String | null;
}
const ClubBoard = (props: props): ReactElement => {
  const { boardIdx, clubId } = props;
  // todo : boardId로 해당하는 board의 데이터 가져오기
  console.log(boardIdx, clubId);

  return (
    <>
      {boardIdx === 2 ? (
        <InfoBoard />
      ) : boardIdx === 3 ? (
        <ActivityBoard />
      ) : (
        <PostBoard posts={posts} />
      )}
    </>
  );
};
export default ClubBoard;
