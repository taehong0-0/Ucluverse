import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { DepartmentListState } from '../../../Recoil/Club';
import { userState } from '../../../Recoil/User';
import { departmentList } from '../../../Util/constant';
import { CharacterDetail, InfoContainer, InfoDetail } from './style';

const MyInfo = (): ReactElement => {
  const user = useRecoilValue(userState);
  const [department, setDepartment] = useState<string>('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/departments/${user.departmentIdx}`)
      .then((res) => setDepartment(res.data.res.departments.name));
  }, []);
  return (
    <InfoContainer>
      <InfoDetail>
        <div>
          <span>{user.nickname} 님</span>
        </div>
        <div>
          <span>성명</span>
          <span>{user.name}</span>
        </div>
        <div>
          <span>학번</span>
          <span>{user.studentId}</span>
        </div>
        <div>
          <span>학과</span>
          <span>{department}</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>{user.phoneNumber}</span>
        </div>
      </InfoDetail>
      <CharacterDetail>
        <span>캐릭터</span>
      </CharacterDetail>
    </InfoContainer>
  );
};
export default MyInfo;
