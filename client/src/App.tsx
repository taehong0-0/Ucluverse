import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    </Routes>
  );
};

export default App;
