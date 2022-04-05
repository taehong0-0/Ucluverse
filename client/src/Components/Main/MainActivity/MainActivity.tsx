import React, { MouseEventHandler, ReactElement, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ActivityContainer } from './style';
import leftArrowImg from '../../../Assets/left-arrow.png';
import rightArrowImg from '../../../Assets/right-arrow.png';
import activityImg from '../../../Assets/활동사진.png';
import test1 from '../../../Assets/test1.jpeg';
import test2 from '../../../Assets/test2.jpeg';
import test3 from '../../../Assets/test3.jpeg';
import test4 from '../../../Assets/test4.jpeg';
import test5 from '../../../Assets/test5.jpeg';
import Slider from 'react-slick';
interface props {
  datas: data[];
}
interface data {
  src: string;
  postNum: number;
}
interface buttonProps {
  className?: string;
  style?: object;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = (props: buttonProps) => {
  const { className, style, onClick } = props;
  return (
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
  );
};
const NextArrow = (props: buttonProps) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightArrowImg}
      onClick={onClick}
      className={className}
      style={{ ...style, marginRight: '50vw', width: '20px', height: '35px' }}
    />
  );
};
const MainActivity = (): ReactElement => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const aa = () => {
    console.log(document.getElementsByClassName('slick-active'));
  };
  return (
    <ActivityContainer>
      <img src={activityImg} width="117px" />
      <span>서로가 남긴 발자취를 담아 보았어요.</span>
      <Link to="/">
        <span>더보기</span>
      </Link>
      <Slider {...settings}>
        <div>
          <img src={test1} width="468px" height="350px" />
        </div>
        <div>
          <img src={test2} width="468px" height="350px" />
        </div>
        <div>
          <img src={test3} width="468px" height="350px" />
        </div>
        <div>
          <img src={test4} width="468px" height="350px" />
        </div>
        <div>
          <img src={test5} width="468px" height="350px" />
        </div>
      </Slider>
    </ActivityContainer>
  );
};
export default MainActivity;
