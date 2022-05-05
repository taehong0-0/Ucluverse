import React, { ReactElement } from 'react';
import ClubBody from '../../Components/ClubList/ClubBody/ClubBody';
import Header from '../../Components/Header/Header';

const DepartmentClubList = (): ReactElement => {
  return (
    <div>
      <Header />
      <ClubBody />
    </div>
  );
};
export default DepartmentClubList;
