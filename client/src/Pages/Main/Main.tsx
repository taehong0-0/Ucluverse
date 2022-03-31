import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MainHeader from '../../Components/Main/MainHeader/MainHeader';

const Main = (): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <MainHeader />
      </div>
    </div>
  );
};
export default Main;
