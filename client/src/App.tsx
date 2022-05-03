import axios from 'axios';
import React from 'react';
import { Navigate, Route, Routes, useHref } from 'react-router-dom';
import Club from './Pages/Club/Club';
import ClubList from './Pages/Club/ClubList';
import Login from './Pages/Login/Login';
import LoginInfo from './Pages/Login/LoginInfo';
import Main from './Pages/Main/Main';
import AuthRoute from './Routes/AuthRoute';
import LoginRoute from './Routes/LoginRoute';
import banner from './Assets/띠배너.png';
import footer from './Assets/Footer.png';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
        <Route
          path="login/info"
          element={
            <LoginRoute>
              <LoginInfo />
            </LoginRoute>
          }
        />
        <Route
          path="/club/*"
          element={
            <AuthRoute>
              <Club />
            </AuthRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />

        <Route
          path="/clubList/*"
          element={
            <AuthRoute>
              <ClubList />
            </AuthRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <img
        src={banner}
        style={{ width: '100vw', cursor: 'pointer', marginTop: '130px' }}
        onClick={() => (window.location.href = '/')}
      />
      <img src={footer} style={{ width: '100vw' }} />
    </>
  );
};

export default App;
