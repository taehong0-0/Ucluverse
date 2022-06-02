import { useRef, useEffect } from 'react';
import testMap from '../../Assets/testMap.png';
const Background = ({ marginBackground }: any) => {
  const canvasBackgroundRef = useRef<any>(null);
  const background = new Image();

  useEffect(() => {
    const context = canvasBackgroundRef.current?.getContext('2d');
    background.src = testMap;
    background.onload = () => {
      context?.drawImage(
        background,
        -marginBackground.left / 2,
        -marginBackground.top / 2,
        window.innerWidth,
        window.innerHeight,
        0,
        0,
        window.innerWidth * 2,
        window.innerHeight * 2,
      );
    };
  });

  useEffect(() => {
    const context = canvasBackgroundRef.current?.getContext('2d');
    context !== null && context.clearRect(0, 0, window.screen.width, window.screen.height);
    context?.drawImage(
      background,
      -marginBackground.left / 2,
      -marginBackground.top / 2,
      window.innerWidth,
      window.innerHeight,
      0,
      0,
      window.innerWidth * 2,
      window.innerHeight * 2,
    );
  }, [marginBackground]);

  return (
    <canvas
      width={window.innerWidth - 350}
      height={window.innerHeight}
      ref={canvasBackgroundRef}
      className="backgroundCanvas"
    />
  );
};

export default Background;
