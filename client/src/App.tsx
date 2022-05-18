import axios from 'axios';
import React, { Suspense } from 'react';
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
import { ToastContainer } from 'react-toastify';
import ClubAdmin from './Pages/Admin/ClubAdmin';
import './styles/App.css'; // 초기값 css
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ClubListState, DepartmentListState } from './Recoil/Club';

axios.defaults.withCredentials = true;

const App = () => {
  const setClubList = useSetRecoilState(ClubListState);
  const setDepartmentList = useSetRecoilState(DepartmentListState);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/clubs/department`)
      .then((res) => {
        setDepartmentList(res.data.res.clubs);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/clubs/central`)
      .then((res) => {
        setClubList(res.data.res.clubs);
      });
  }, []);
  return (
    <>
      <Suspense fallback={<span>로딩중</span>}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/login"
            element={
              // <LoginRoute>
              <Login />
              // </LoginRoute>
            }
          />
          <Route
            path="login/info"
            element={
              // <LoginRoute>
              <LoginInfo />
              // </LoginRoute>
            }
          />
          <Route
            path="/club/:id/*"
            element={
              //  <AuthRoute>
              <Club />
              //   </AuthRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route
            path="/clubList/*"
            element={
              //   <AuthRoute>
              <ClubList />
              //  </AuthRoute>
            }
          />
          <Route
            path="/admin/:id"
            element={
              <AuthRoute>
                <ClubAdmin />
              </AuthRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <img
          src={banner}
          style={{ width: '100%', cursor: 'pointer' }}
          onClick={() => {
            history.pushState(null, '', '/');
            window.location.replace('/');
          }}
        />
        <img src={footer} style={{ width: '100%' }} />
      </Suspense>
    </>
  );
};

export default App;
