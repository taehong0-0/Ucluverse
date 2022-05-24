import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { AwardContainer, AwardDiv } from './style';
import awardHeaderImg from '../../../Assets/수상내역.png';
import awardBG1 from '../../../Assets/수상내역배경1.svg';
import Slider from 'react-slick';
import testImg from '../../../Assets/test4.jpeg';
import { AwardPostType } from '../../../Types/PostType';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainAward = (): ReactElement => {
  const [awardList, setAwardList] = useState<AwardPostType[]>([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/awards/all`).then((res) => {
      setAwardList(res.data.res.awards);
    });
  }, []);
  const settings = {
    dots: false,
    infinite: awardList.length > 5 ? true : false,
    autoplay: true,
    speed: 500,
    centerMode: awardList.length > 5 ? true : false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <AwardContainer>
      <div>
        <img src={awardHeaderImg} />
        <span>열심히 활동한 동아리를 볼 수 있어요.</span>
      </div>
      <Slider {...settings}>
        {awardList.map((award) => {
          return (
            <Link to={`club/${award.clubIdx}`} key={award.clubIdx}>
              <AwardDiv>
                <img src={award.path} width="304px" height="486px" />
                <div>
                  <span>{award.clubName}</span>
                  <div>
                    <span>{award.awardTitle}</span>
                    <span>{award.awardName}</span>
                    <div className={`award-border`}></div>
                    <span className={`award-detail`}>{award.awardContent}</span>
                  </div>
                </div>
              </AwardDiv>
            </Link>
          );
        })}
      </Slider>
      <img className="BG" src={awardBG1}/>
    </AwardContainer>
  );
};
export default MainAward;
