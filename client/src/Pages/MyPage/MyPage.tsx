import React, { ReactElement } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MyClub from '../../Components/MyPage/MyClub/MyClub';
import MyInfo from '../../Components/MyPage/MyInfo/MyInfo';
import { theme } from '../../Recoil/Theme';
import { useSetRecoilState } from 'recoil';
import { Wave } from '../../Components/Animation'

const MyPage = (): ReactElement => {
  const setThemeColor = useSetRecoilState(theme);
  setThemeColor('purple');

  return (
    <>
      <Header />
      <section>
        <MyInfo />
          <Wave style="default"/>
        <MyClub />
      </section>
          <Wave style="default-reverse" rotation={180}/>
      <Footer addHeight={100}/>
    </>
  );
};
export default MyPage;
