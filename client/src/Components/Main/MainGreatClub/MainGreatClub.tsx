import React, { ReactElement, useEffect } from 'react';
import { ClubContainer, ImgContainer } from './style';
import titleImg from '../../../Assets/활동 우수 동아리.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ClubType } from '../../../Types/ClubType';
import { useScrollFadeIn } from '../../../Hooks';
import axios from 'axios';
import api from '../../../Util/helpers/Auth/Api';

const MainGreatClub = (): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0, 0.5);
  const animation2 = useScrollFadeIn('up', 1, 0, 0.05);
  const [greatList, setGreatList] = useState<ClubType[]>([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/clubs/greatClubs`).then((res) => {
      setGreatList(res.data.res.clubs);
    });
  }, []);

  return (
    <ClubContainer>
      <div className="layout">
        <div className="titleDiv" {...animation}>
          <img src={titleImg} className="title" />
          <span>동아리 활동이 현재 매우 활발한 동아리에요.</span>
          <span>사람들과 교류를 쉽게 할 수 있을 거에요!</span>
        </div>
        <ImgContainer>
          <section className="overflow-container" {...animation2}>
            {greatList.map((club) => (
              <div key={club.clubIdx}>
                <Link to={`/club/${club.clubIdx}`}>
                  <img src={club.logoPath ?? ''} />
                  <button>
                    <span>+</span>
                  </button>
                </Link>
              </div>
            ))}
          </section>
        </ImgContainer>
      </div>
    </ClubContainer>
  );
};
export default MainGreatClub;
