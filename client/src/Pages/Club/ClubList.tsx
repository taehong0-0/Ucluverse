import React, { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ClubBody from '../../Components/ClubList/ClubBody/ClubBody';
import Header from '../../Components/Header/Header';

const ClubList = (): ReactElement => {
  return (
    <div>
      <Header />
      <ClubBody />
    </div>
  );
};
export default ClubList;
