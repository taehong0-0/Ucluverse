import React, { ReactElement, useRef, useState } from 'react';
import { NewClubContainer } from './style';
import clubImg from '../../../Assets/test1.jpeg';
import newClubImg from '../../../Assets/신설 동아리.png';
import { Link } from 'react-router-dom';
import { ClubType } from '../../../Types/ClubType';
import { useEffect } from 'react';
import axios from 'axios';
import {useScrollFadeIn} from '../../../Hooks';

interface props {
  imgURL: string;
  linkURL: string;
}
const MainNewClub = (): ReactElement => {
  const animation = useScrollFadeIn('right');
  const animation2 = useScrollFadeIn('right', 1, 0.2);
  const [club, setClub] = useState<ClubType | null>(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/clubs/newClubs`).then((res) => {
      setClub(res.data.res.clubs[1]);
    });
  }, []);
  return (
    <NewClubContainer>
      <article {...animation}>
        <Link to={`/club/${club?.clubIdx}`}>
          <img src={club?.logoPath ?? ''} className="club-img" />
          <button>
            <span>+</span>
          </button>
          <div>
            <span>{club?.name}</span>
          </div>
        </Link>
      </article>
      <article {...animation2}>
        <img src={newClubImg} />
        <span>이번에 새로 생긴 매력 넘치는 동아리에요</span>
        <span> 무엇이 생겼는지 한 번 확인해보시겠어요?</span>
        <Link to="/">
          <span>→ 자세히 보기</span>
        </Link>
      </article>
    </NewClubContainer>
  );
};
export default MainNewClub;
