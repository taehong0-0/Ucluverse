import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BoardContainer, SideBarContainer } from './style';
interface props {
  AboutBoardList: board[];
  CommunicationBoardList: board[];
  clubId: string | null;
}
interface board {
  name: string;
  boardId: number;
}
const ClubSideBar = (props: props): ReactElement => {
  const { AboutBoardList, CommunicationBoardList, clubId } = props;
  return (
    <SideBarContainer>
      <button>가입 신청</button>
      <span>카테고리</span>
      <BoardContainer>
        <div>
          <span>About</span>
          {AboutBoardList.map((board) => (
            <Link to={`/club/board?clubId=${clubId}&boardId=${board.boardId}`}>
              <span>{board.name}</span>
            </Link>
          ))}
        </div>
        <div>
          <span>소통공간</span>
          {CommunicationBoardList.map((board) => (
            <Link to={`/club/board?clubId=${clubId}&boardId=${board.boardId}`}>
              <span>{board.name}</span>
            </Link>
          ))}
        </div>
      </BoardContainer>
    </SideBarContainer>
  );
};
export default ClubSideBar;
