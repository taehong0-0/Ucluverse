import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MyInfo from '../../Components/MyPage/MyInfo/MyInfo';

const MyPage = (): ReactElement => {
  //useCheckLogin();
  //design test
  return (
    <div>
      <Header />
      <div>
        <MyInfo />
      </div>
    </div>
  );
};
export default MyPage;
