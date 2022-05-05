import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MainActivity from '../../Components/Main/MainActivity/MainActivity';
import MainAward from '../../Components/Main/MainAward/MainAward';
import MainBoardContainer from '../../Components/Main/MainBoard/MainBoardContainer';
import MainGreatClub from '../../Components/Main/MainGreatClub/MainGreatClub';
import MainHeader from '../../Components/Main/MainHeader/MainHeader';
import MainNewClub from '../../Components/Main/MainNewClub/MainNewClub';

const Main = (): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <MainHeader />
        <MainBoardContainer />
        <MainActivity />
        <MainAward />
        <MainNewClub />
        <MainGreatClub />
      </div>
    </div>
  );
};
export default Main;
