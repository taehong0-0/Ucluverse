import React, { ReactElement, useRef } from 'react';
import { NewClubContainer } from './style';
import clubImg from '../../../Assets/test1.jpeg';
import newClubImg from '../../../Assets/신설 동아리.png';
import { Link } from 'react-router-dom';
interface props {
  imgURL: string;
  linkURL: string;
}
const MainNewClub = (): ReactElement => {
  return (
    <NewClubContainer>
      <img src={clubImg} className="club-img" />
      <div>
        <img src={newClubImg} />
        <span>이번에 새로 생긴 매력 넘치는 동아리에요</span>
        <span> 무엇이 생겼는지 한 번 확인해보시겠어요?</span>

        <Link to="/">
          <span>→ 자세히 보기</span>
        </Link>
      </div>
    </NewClubContainer>
  );
};
export default MainNewClub;
