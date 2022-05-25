import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import MyClub from '../../Components/MyPage/MyClub/MyClub';
import MyInfo from '../../Components/MyPage/MyInfo/MyInfo';
import { theme } from '../../Recoil/Theme';
import { useSetRecoilState } from 'recoil';

const MyPage = (): ReactElement => {
  const setThemeColor = useSetRecoilState(theme);
  setThemeColor('purple');

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
