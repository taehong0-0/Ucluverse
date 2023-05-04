import React, { ReactElement } from 'react';
import { CharacterButtonContainer } from './style';
import leftArrow from '../../Assets/왼쪽화살표.svg';
import rightArrow from '../../Assets/오른쪽화살표.svg';

interface IProps {
  content: string;
  type: string;
  number: number;
  maxNum: number;
  // eslint-disable-next-line no-unused-vars
  setNumber(type: string, num: number): void;
}
function CharacterButton(props: IProps): ReactElement {
  const { content, type, number, maxNum, setNumber } = props;
  const minus = () => {
    if (number > 1) setNumber(type, number - 1);
  };
  const plus = () => {
    if (number < maxNum) setNumber(type, number + 1);
  };

  return (
    <CharacterButtonContainer>
      <button onClick={() => minus()}>
        <img alt="" src={leftArrow} />
      </button>
      <span>
        {content}
        {number}
      </span>
      <button onClick={() => plus()}>
        <img alt="" src={rightArrow} />
      </button>
    </CharacterButtonContainer>
  );
}
export default CharacterButton;
