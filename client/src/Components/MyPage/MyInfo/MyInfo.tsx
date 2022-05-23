import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../Recoil/User';
import { InfoRightContainer, InfoContainer, InfoDetail, ImageDetail, InfoButtonContainer } from './style';
import backGround from '../../../Assets/MainBG.svg';

const MyInfo = (): ReactElement => {
  const user = useRecoilValue(userState);
  console.log(user);
  const [department, setDepartment] = useState<string>('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/departments/${user.departmentIdx}`)
      .then((res) => setDepartment(res.data.res.departments.name));
  }, []);
  return (
    <InfoContainer>
      <img src={backGround} />
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
      <InfoRightContainer>
        <ImageDetail>
          <div>{user.profilePhoto ? <img src={user.profilePhoto} /> : <span>이미지를 등록해주세요.</span>}</div>
          <div>캐릭터가 들어갈 예정</div>
        </ImageDetail>
        <InfoButtonContainer>
          <button>정보수정</button>
        </InfoButtonContainer>
      </InfoRightContainer>
    </InfoContainer>
  );
};
export default MyInfo;
