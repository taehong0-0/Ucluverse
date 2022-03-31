import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MainBoard from '../../Components/Main/MainBoard/MainBoard';
import MainBoardContainer from '../../Components/Main/MainBoard/MainBoardContainer';
import MainHeader from '../../Components/Main/MainHeader/MainHeader';

const Main = (): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <MainHeader />
        <MainBoardContainer />
      </div>
    </div>
  );
};
export default Main;
