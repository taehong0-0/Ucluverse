import axios from 'axios';
import React, { ReactElement } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import ClubBoard from '../../Components/Club/Board/ClubBoard';
import ClubHeader from '../../Components/Club/Header/ClubHeader';
import ClubMain from '../../Components/Club/Main/ClubMain';
import ClubPost from '../../Components/Club/Post/ClubPost';
import Posting from '../../Components/Club/Posting/Posting';
import ClubSideBar from '../../Components/Club/SideBar/ClubSideBar';
import Header from '../../Components/Header/Header';
import { ClubType } from '../../Types/ClubType';
import { ActivityPostType, BoardType } from '../../Types/PostType';

const AboutList = ['전체 게시판', '공지사항', '동아리 소개', '활동 게시판', '수상 게시판'];
const CommunicationList = ['자유 게시판', 'QNA 게시판'];
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
interface ContextProps {
  club: ClubType | null;
  activityList: ActivityPostType[];
}
export const ClubContext = createContext<ContextProps | null>(null);
const Club = (): ReactElement => {
  const { id } = useParams();
  const clubId = Number(id);
  const [boardIdx, setBoardIdx] = useState<number>(0);
  const [club, setClub] = useState<ClubType | null>(null);
  const [activityList, setActivityList] = useState<ActivityPostType[]>([]);
  const [AboutBoards, setAboutBoards] = useState<BoardType[]>([]);
  const [CommunicationBoards, setCommunicationBoards] = useState<BoardType[]>([]);
  // 데이터 요청해서 받아오기
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/clubs/club/${clubId}`).then((res) => {
      setClub(res.data.res.clubs);
      const clubBoards = res.data.res.clubs.clubBoards[0];
      AboutList.map((boardName) => {
        setAboutBoards((AboutBoards) => [...AboutBoards, { name: boardName, boardIdx: clubBoards[boardName] }]);
      });
      CommunicationList.map((boardName) => {
        setCommunicationBoards((CommunicationBoards) => [
          ...CommunicationBoards,
          { name: boardName, boardIdx: clubBoards[boardName] },
        ]);
      });
    });
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/`).then((res) => {
    //   setActivityList(res.data);
    // });
  }, []);
  return (
    <div>
      <ClubContext.Provider value={{ club, activityList }}>
        <Header />
        <div style={{ marginBottom: '130px' }}>
          <ClubHeader title={club?.name ?? ''} hashtags={club?.clubCategories ?? []} clubId={clubId} />
          <div style={{ display: 'flex' }}>
            <ClubSideBar
              clubId={clubId}
              AboutBoardList={AboutBoards}
              CommunicationBoardList={CommunicationBoards}
              setBoardIdx={setBoardIdx}
            />
            <Routes>
              <Route path="/" element={<ClubMain />}></Route>
              <Route path="/post" element={<ClubPost />}></Route>
              <Route
                path="/board"
                element={
                  <ClubBoard boardIdx={boardIdx} clubId={clubId} boards={[...AboutBoards, ...CommunicationBoards]} />
                }
              ></Route>
              <Route path="/posting" element={<Posting clubId={clubId} />}></Route>
            </Routes>
          </div>
        </div>
      </ClubContext.Provider>
    </div>
  );
};
export default Club;
