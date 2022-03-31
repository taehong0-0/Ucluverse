import React, { ReactElement, useRef } from 'react';
import MainBoard from './MainBoard';
import { MainBoardContainerDiv } from './style';
import noticeImg from '../../../Assets/공지사항.png';
import FAQImg from '../../../Assets/FAQ.png';
import popularImg from '../../../Assets/인기게시판.png';

//테스트용 더미데이터
const posts = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요2', id: 2 },
  { title: '안녕하세요3', id: 3 },
  { title: '안녕하세요4', id: 4 },
  { title: '안녕하세요5', id: 5 },
];

const MainBoardContainer = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <MainBoardContainerDiv>
      <MainBoard imgURL={popularImg} posts={posts} />
      <MainBoard imgURL={noticeImg} posts={posts} />
      <MainBoard imgURL={FAQImg} posts={posts} />
    </MainBoardContainerDiv>
  );
};
export default MainBoardContainer;
