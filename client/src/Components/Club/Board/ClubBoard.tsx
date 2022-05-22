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
  boardName: string;
}
const ClubBoard = (props: props): ReactElement => {
  const { boardIdx, clubId, boardName } = props;

  return (
    <>
      {boardName === '동아리 소개' ? (
        <InfoBoard />
      ) : boardName === '수상 게시판' ? (
        <AwardBoard clubId={clubId} />
      ) : boardName === '활동 게시판' ? (
        <ActivityBoard boardIdx={boardIdx} clubId={clubId} />
      ) : (
        <PostBoard boardIdx={boardIdx} clubId={clubId} boardName={boardName} />
      )}
    </>
  );
};
export default ClubBoard;
