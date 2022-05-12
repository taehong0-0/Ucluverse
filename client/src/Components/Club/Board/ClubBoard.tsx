import React, { ReactElement, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ClubContext } from '../../../Pages/Club/Club';
import { BoardType } from '../../../Types/PostType';
import ActivityBoard from './ActivityBoard/ActivityBoard';
import AwardBoard from './AwardBoard/AwardBoard';
import InfoBoard from './InfoBoard/InfoBoard';
import PostBoard from './PostBoard/PostBoard';
interface props {
  boardIdx: number;
  clubId: number;
  boards: BoardType[];
}
const ClubBoard = (props: props): ReactElement => {
  const { boardIdx, clubId, boards } = props;
  const [boardName, setBoardName] = useState<string>('');

  useEffect(() => {
    setBoardName(
      boards.filter((board) => board.boardIdx === boardIdx)[0]?.name,
    );
    setBoardName('활동게시판');
  }, [boardIdx]);
  return (
    <>
      {boardName === '소개게시판' ? (
        <InfoBoard />
      ) : boardName === '수상게시판' ? (
        <AwardBoard boardIdx={boardIdx} />
      ) : boardName === '활동게시판' ? (
        <ActivityBoard boardIdx={boardIdx} clubId={clubId} />
      ) : (
        <PostBoard boardIdx={boardIdx} clubId={clubId} />
      )}
    </>
  );
};
export default ClubBoard;
