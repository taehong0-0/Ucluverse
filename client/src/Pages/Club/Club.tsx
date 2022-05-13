import React, { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ClubBoard from '../../Components/Club/Board/ClubBoard';
import ClubHeader from '../../Components/Club/Header/ClubHeader';
import ClubMain from '../../Components/Club/Main/ClubMain';
import ClubPost from '../../Components/Club/Post/ClubPost';
import Posting from '../../Components/Club/Posting/Posting';
import ClubSideBar from '../../Components/Club/SideBar/ClubSideBar';
import Header from '../../Components/Header/Header';

const AboutBoardList = [
  { name: '전체 게시글', boardId: 0 },
  { name: '공지사항', boardId: 1 },
  { name: '동아리 소개', boardId: 2 },
  { name: '활동게시판', boardId: 3 },
  { name: '수상게시판', boardId: 6 },
];
const CommunicationBoardList = [
  { name: '자유 게시판', boardId: 4 },
  { name: 'Q&A 게시판', boardId: 5 },
];

const Club = (): ReactElement => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const clubId = Number(urlParams.get('clubIdx'));
  const [boardIdx, setBoardIdx] = useState<Number>(1);
  // 데이터 요청해서 받아오기
  //더미데이터
  return (
    <div>
      <Header />
      <div style={{ marginBottom: '130px' }}>
        <ClubHeader title="Do-iT!" hashtags={['코딩', '웹', '개발']} />
        <div style={{ display: 'flex' }}>
          <ClubSideBar
            clubId={clubId}
            AboutBoardList={AboutBoardList}
            CommunicationBoardList={CommunicationBoardList}
            setBoardIdx={setBoardIdx}
          />
          <Routes>
            <Route path="/" element={<ClubMain />}></Route>
            <Route
              path="/board"
              element={<ClubBoard boardIdx={boardIdx} clubId={clubId} />}
            ></Route>
            <Route path="/post" element={<ClubPost />}></Route>
            <Route
              path="/posting"
              element={<Posting clubId={clubId} boardIdx={boardIdx} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Club;
