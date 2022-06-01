import { useEffect, useRef, useState } from 'react';
import snowman from '../../Assets/snowman.png';
const direct: any = {
  up: 32 * 6,
  down: 0,
  left: 32 * 3,
  right: 32 * 9,
};

const run: any = {
  mid: 0,
  left: 32,
  right: 32 * 2,
};
const dance: any = {
  leftUp: 32 * 12,
  rightMid: 32 * 13,
  rightUp: 32 * 14,
  leftMid: 32 * 15,
};

const Character = ({ socketId, users, marginBackground, move }: any) => {
  const characterCanvas = useRef<any>(null);

  const changeMotion = (direction: any, state: any) => dance[state] ?? direct[direction] + run[state];

  const [characterImg, setCharacterImg] = useState<any>();

  useEffect(() => {
    setCharacterImg(new Image());
  }, []);

  useEffect(() => {
    if (!characterCanvas.current) return;
    const actx = characterCanvas.current.getContext('2d');
    actx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    Object.entries(users).map(([key, { x, y, direction, state }]: any) => {
      if (key !== socketId) {
        if (characterImg === undefined || !characterImg) return;
        characterImg.src = snowman;

        actx?.drawImage(
          characterImg,
          changeMotion(direction, state),
          0,
          32,
          32,
          window.innerWidth / 2 + x - users[socketId].x,
          window.innerHeight / 2 + y - users[socketId].y,
          50,
          50,
        );
      } else {
        if (characterImg === undefined) return;
        characterImg.src = snowman;

        actx?.drawImage(
          characterImg,
          changeMotion(direction, state),
          0,
          32,
          32,
          window.innerWidth / 2,
          window.innerHeight / 2,
          50,
          50,
        );
      }
    });
  }, [characterImg, users]);

  return (
    <canvas
      ref={characterCanvas}
      width={window.innerWidth - 350}
      height={window.innerHeight}
      className="characterCanvas"
    />
  );
};

export default Character;
