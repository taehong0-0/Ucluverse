import React, { ReactElement } from 'react';
import { CharacterButtonContainer } from './style';
import leftArrow from '../../Assets/왼쪽화살표.svg';
import rightArrow from '../../Assets/오른쪽화살표.svg';
interface props {
  content: string;
  number: number;
  maxNum: number;
  setNumber(num: number): void;
}
const CharacterButton = (props: props): ReactElement => {
  const { content, number, maxNum, setNumber } = props;
  const minus = () => {
    if (number > 1) setNumber(number - 1);
  };
  const plus = () => {
    if (number < maxNum) setNumber(number + 1);
  };
  return (
    <CharacterButtonContainer>
      <button onClick={() => minus()}>
        <img src={leftArrow}></img>
      </button>
      <span>
        {content}
        {number}
      </span>
      <button onClick={() => plus()}>
        <img src={rightArrow}></img>
      </button>
    </CharacterButtonContainer>
  );
};
export default CharacterButton;
