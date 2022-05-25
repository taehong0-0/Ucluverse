import React, { ReactElement, useEffect } from 'react';
import { ClubContainer, ImgContainer } from './style';
import titleImg from '../../../Assets/활동 우수 동아리.png';
import test1 from '../../../Assets/test1.jpeg';
import test2 from '../../../Assets/test2.jpeg';
import test3 from '../../../Assets/test3.jpeg';
import test4 from '../../../Assets/test4.jpeg';
import test5 from '../../../Assets/test5.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ClubType } from '../../../Types/ClubType';
import { useScrollFadeIn } from '../../../Hooks';

const MainGreatClub = (): ReactElement => {
  const animation = useScrollFadeIn('up',1,0,1);
  const animation2 = useScrollFadeIn('up',1,0,.05);
  const [greatList, setGreatList] = useState<ClubType[]>([]);
  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/`).then((res) => {
    //   setGreatList(res.data);
    // });
  }, []);

  return (
    <ClubContainer>
      <article {...animation}>
        <img src={titleImg} className="title" />
        <span>동아리 활동이 현재 매우 활발한 동아리에요.</span>
        <span>사람들과 교류를 쉽게 할 수 있을 거에요!</span>
      </article>
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
          <div>
            <Link to="login">
              <img src={test1} />
              <button>
                <span>+</span>
              </button>
            </Link>
          </div>
          <div>
            <img src={test2} />
            <button>
              <span>+</span>
            </button>
          </div>
          <div>
            <img src={test3} />
            <button>
              <span>+</span>
            </button>
          </div>
          <div>
            <img src={test4} />
            <button>
              <span>+</span>
            </button>
          </div>
          <div>
            <img src={test5} />
            <button>
              <span>+</span>
            </button>
          </div>
          <div>
            <img src={test1} />
            <button>
              <span>+</span>
            </button>
          </div>
        </section>
      </ImgContainer>
    </ClubContainer>
  );
};
export default MainGreatClub;
