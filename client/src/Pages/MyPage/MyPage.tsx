import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MyClub from '../../Components/MyPage/MyClub/MyClub';
import MyInfo from '../../Components/MyPage/MyInfo/MyInfo';

const MyPage = (): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <MyInfo />
        <MyClub />
      </div>
    </div>
  );
};
export default MyPage;
