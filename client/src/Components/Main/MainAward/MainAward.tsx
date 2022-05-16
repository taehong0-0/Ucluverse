import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { AwardContainer, AwardDiv } from './style';
import awardHeaderImg from '../../../Assets/수상내역.png';
import Slider from 'react-slick';
import testImg from '../../../Assets/test4.jpeg';
import { AwardPostType } from '../../../Types/PostType';

const MainAward = (): ReactElement => {
  const [awardList, setAwardList] = useState<AwardPostType[]>([]);
  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/`).then((res) => {
    //   setAwardList(res.data);
    // });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const dummyList = [
    {
      url: '../../../Assets/test5.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test5.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test5.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test4.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test3.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test2.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
    {
      url: '../../../Assets/test1.jpeg',
      clubName: '동아리이름',
      title: '캡스톤경진대회',
      award: '금상',
    },
  ];
  return (
    <AwardContainer>
      <div>
        <img src={awardHeaderImg} />
        <span>열심히 활동한 동아리를 볼 수 있어요.</span>
      </div>
      <Slider {...settings}>
        {dummyList.map((award) => {
          return (
            <AwardDiv
              onClick={() => {
                history.pushState(null, '', '/club');
                window.location.replace('/club');
              }}
            >
              <img src={testImg} width="304px" height="486px" />
              <div>
                <span>{award.clubName}</span>
                <div>
                  <span>{award.title}</span>
                  <span>{award.award}</span>
                  <div className={`award-border`}></div>
                  <span className={`award-detail`}>
                    sadfas dfasdfasdfasdfasfdasdfasdfsadf
                    asdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdfsadfasdfasdfasdfasdfasfdasdfasdf
                  </span>
                </div>
              </div>
            </AwardDiv>
          );
        })}
      </Slider>
    </AwardContainer>
  );
};
export default MainAward;
