import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClubBody from '../../Components/ClubList/Body/ClubBody';
import DepartmentBody from '../../Components/ClubList/Body/DepartmentClubBody';
import Header from '../../Components/Header/Header';

const ClubList = (): ReactElement => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ClubBody />} />
        <Route path="/department" element={<DepartmentBody />} />
      </Routes>
    </div>
  );
};
export default ClubList;
