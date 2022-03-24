import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import AuthRoute from './Routes/AuthRoute';

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
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
