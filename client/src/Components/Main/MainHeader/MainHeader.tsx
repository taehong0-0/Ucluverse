import React, { ReactElement } from 'react';
import { MainHeaderDiv } from './style';
import mainHeaderImg from '../../../Assets/메인헤더.png';
import mainHeaderContentImg from '../../../Assets/메인헤더글.svg';
import searchBarImg from '../../../Assets/검색창.svg';

const MainHeader = (): ReactElement => {
  return (
    <MainHeaderDiv>
      <img src={mainHeaderImg} className="background"></img>
      <div className="content">
        <img src={mainHeaderContentImg} />
        <span>다양한 우리들의 공간을 찾아보세요</span>
        <img src={searchBarImg} />
      </div>
    </MainHeaderDiv>
  );
};
export default MainHeader;
