import React, { MouseEventHandler, ReactElement, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ActivityContainer } from './style';
import leftArrowImg from '../../../Assets/left-arrow.png';
import rightArrowImg from '../../../Assets/right-arrow.png';
import activityImg from '../../../Assets/활동사진.png';
import Slider from 'react-slick';
import { ActivityPostType } from '../../../Types/PostType';
import { useState } from 'react';
import axios from 'axios';
import { useScrollFadeIn } from '../../../Hooks';
import api from '../../../Util/helpers/Auth/Api';

interface buttonProps {
  className?: string;
  style?: object;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MainActivity = (): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0, 0.95);
  const [activityList, setActivityList] = useState<ActivityPostType[]>([]);
  const activityRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    api.get(`/postings/main?boardName=활동 게시판`).then((res) => {
      setActivityList(res.data.res.postings);
    });
  }, []);
  const PrevArrow = (props: buttonProps) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={() => onChange()}>
        <img
          src={leftArrowImg}
          onClick={onClick}
          className={className}
          style={{
            ...style,
            marginLeft: '50vw',
            width: '20px',
            height: '35px',
            zIndex: '999',
          }}
        />
      </div>
    );
  };
  const NextArrow = (props: buttonProps) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={() => onChange()}>
        <img
          src={rightArrowImg}
          onClick={onClick}
          className={className}
          style={{ ...style, marginRight: '50vw', width: '20px', height: '35px' }}
        />
      </div>
    );
  };
  const onChange = () => {
    // if (dumyList.length <= 3) return;
    // var idx = 0;
    // for (let element of activityRef.current) {
    //   // console.log(element);
    //   if (element.closest('.slick-active')) {
    //     console.log(activityRef.current[(idx + 2) % dumyList.length]);
    //     element.style.width = '31.25rem';
    //     element.style.height = '18.75rem';
    //     element.style.opacity = '0.45';
    //     activityRef.current[(idx + 2) % dumyList.length].style.width = '31.25rem';
    //     activityRef.current[(idx + 2) % dumyList.length].style.height = '18.75rem';
    //     activityRef.current[(idx + 2) % dumyList.length].style.opacity = '0.45';
    //     return false;
    //   }
    //   idx++;
    // }
    // activityRef.current.forEach((element, idx) => {
    // console.log(element.closest('.slick-slide'));
    // if (element.closest('.slick-active')) {
    //   console.log(11);
    // element.style.width = '31.25rem';
    // element.style.height = '18.75rem';
    // element.style.opacity = '0.45';
    // activityRef.current[(idx + 2) % dumyList.length].style.width = '31.25rem';
    // activityRef.current[(idx + 2) % dumyList.length].style.height = '18.75rem';
    // activityRef.current[(idx + 2) % dumyList.length].style.opacity = '0.45';
    // return false;
    //   }
    // });
  };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: activityList.length > 3 ? true : false,
    centerMode: activityList.length > 3 ? true : false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <ActivityContainer>
      <article {...animation}>
        <img src={activityImg} width="117px" />
        <span>서로가 남긴 발자취를 담아 보았어요.</span>
        <Link to="/">
          <span>더보기</span>
        </Link>
      </article>
      <Slider {...settings}>
        {activityList.map((activity, idx) => (
          <div ref={(el: HTMLInputElement) => (activityRef.current[idx] = el)} key={activity.createdAt}>
            <Link to={`/club/${activity.clubIdx}/post?postId=${activity.postingIdx}`}>
              <img src={activity.path ?? ''} width="468px" height="350px" />
            </Link>
          </div>
        ))}
      </Slider>
    </ActivityContainer>
  );
};
export default MainActivity;
