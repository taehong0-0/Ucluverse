import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface lottieInfo {}

const Lottie = (
  data: any,
  isLoop: boolean | number = false,
  imgWidth: number,
  imgHeight: number,
  speed: number = 1,
) => {
  const DOM = useRef<any>();

  useEffect(() => {
    lottie.loadAnimation({
      container: DOM.current,
      renderer: 'svg',
      loop: isLoop,
      autoplay: true,
      animationData: data,
    });
    lottie.setSpeed(speed);
  }, []);

  return {
    ref: DOM,
    style: {
      width: `${imgWidth}vw`,
      height: `${imgHeight}vh`,
    },
    className: 'lottie',
  };
};

export default Lottie;

// delay 표현할 방법 찾아야 함 (setTimeout 너무 비효율적 + 개별적으로 적용이 안 됨)
