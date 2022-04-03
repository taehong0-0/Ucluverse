import React, { ReactElement, useRef } from 'react';
import { AwardContainer } from './style';
import awardHeaderImg from '../../../Assets/수상내역.png';
const MainAward = (): ReactElement => {
  return (
    <AwardContainer>
      <div>
        <img src={awardHeaderImg} />
        <span>열심히 활동한 동아리를 볼 수 있어요.</span>
      </div>
    </AwardContainer>
  );
};
export default MainAward;
