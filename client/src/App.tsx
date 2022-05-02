import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Club from './Pages/Club/Club';
import ClubList from './Pages/Club/ClubList';
import Login from './Pages/Login/Login';
import LoginInfo from './Pages/Login/LoginInfo';
import Main from './Pages/Main/Main';
import AuthRoute from './Routes/AuthRoute';
import LoginRoute from './Routes/LoginRoute';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Main />
          </AuthRoute>
        }
      />
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
  );
};

export default App;
