import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClubBoard from '../../Components/Club/Board/ClubBoard';
import ClubHeader from '../../Components/Club/Header/ClubHeader';
import ClubMain from '../../Components/Club/Main/ClubMain';
import ClubSideBar from '../../Components/Club/SideBar/ClubSideBar';
import Header from '../../Components/Header/Header';
const Club = (): ReactElement => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const clubId = urlParams.get('clubId');
  // 데이터 요청해서 받아오기
  const AboutBoardList = [
    { name: '공지사항', boardId: 1 },
    { name: '동아리 소개', boardId: 2 },
    { name: '활동게시판', boardId: 3 },
  ];
  const CommunicationBoardList = [
    { name: '자유 게시판', boardId: 4 },
    { name: 'Q&A 게시판', boardId: 5 },
  ];
  //더미데이터
  return (
    <div>
      <Header />
      <div>
        <ClubHeader title="Do-iT!" hashtags={['코딩', '웹', '개발']} />
        <div style={{ display: 'flex' }}>
          <ClubSideBar
            clubId={clubId}
            AboutBoardList={AboutBoardList}
            CommunicationBoardList={CommunicationBoardList}
          />
          <Routes>
            <Route path="/" element={<ClubMain />}></Route>
            <Route path="/board" element={<ClubBoard />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Club;
