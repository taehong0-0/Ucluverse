import React, { ReactElement } from 'react';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';

const LoginInfo = (): ReactElement => {
  const status = 'notLogin';
  const nameRef = useRef();
  const studentIDRef = useRef();
  const nickNameRef = useRef();
  const profileRef = useRef();
  const phoneRef = useRef();
  
  return status !== 'notLogin' ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <span>login info</span>
      <input />
      <input />
      <input />
      <input />
      <input />
      <button>제출</button>
    </div>
  );
};
export default LoginInfo;
