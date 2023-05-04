import React, { ReactElement } from 'react';

import ActivityBoard from './ActivityBoard/ActivityBoard';
import AwardBoard from './AwardBoard/AwardBoard';
import InfoBoard from './InfoBoard/InfoBoard';
import PostBoard from './PostBoard/PostBoard';

interface IProps {
  boardIdx: number;
  clubId: number;
  boardName: string;
}
function ClubBoard(props: IProps): ReactElement {
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
}
export default ClubBoard;
