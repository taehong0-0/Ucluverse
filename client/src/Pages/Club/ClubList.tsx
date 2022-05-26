import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClubBody from '../../Components/ClubList/Body/ClubBody';
import DepartmentBody from '../../Components/ClubList/Body/DepartmentClubBody';
import OtherBody from '../../Components/ClubList/Body/OtherBody';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { theme } from '../../Recoil/Theme';
import { useSetRecoilState } from 'recoil';

const ClubList = (): ReactElement => {
  const setThemeColor = useSetRecoilState(theme);
  setThemeColor('darkPurple');

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ClubBody />} />
        <Route path="/department" element={<DepartmentBody />} />
        <Route path="/other" element={<OtherBody />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default ClubList;
