import axios from 'axios';
import React, { ChangeEvent, ReactElement, RefObject, useRef, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDataState, userState } from '../../../Recoil/User';
import { InfoRightContainer, InfoContainer, InfoDetail, ImageDetail, InfoButtonContainer } from './style';
import backGround from '../../../Assets/MainBG.svg';
import Button from '../../Button/Button';
import { departmentIdxList, departmentList } from '../../../Util/constant';

const MyInfo = (): ReactElement => {
  const [user, setUser] = useRecoilState(userState);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [department, setDepartment] = useState<string>('');
  const nameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const [nameModify, setNameModify] = useState<string>('');
  const [studentIdModify, setStudentIdModify] = useState<number>(0);
  const [phoneModify, setPhoneModify] = useState<string>('');
  const [nicknameModify, setNicknameModify] = useState<string>('');

  const setModify = () => {
    setIsModify((modify) => !modify);
  };
  useEffect(() => {
    setNameModify(user.name);
    setStudentIdModify(user.studentId);
    setPhoneModify(user.phoneNumber);
    setNicknameModify(user.nickname);
  }, [isModify]);
  const clickSave = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/${user.userIdx}`, {
        name: nameModify,
        department: departmentRef.current?.value ?? '',
        studentId: studentIdModify,
        phoneNumber: phoneModify,
        nickname: nicknameModify,
        profilePhotoPath: user.profilePhoto,
      })
      .then((res) => {
        const { name, studentId, phoneNumber, nickname, profilePhoto, ...rest } = user;
        console.log(rest);
        setUser({
          ...rest,
          name: nameModify,
          studentId: studentIdModify,
          phoneNumber: phoneModify,
          nickname: nicknameModify,
          profilePhoto: profilePhoto,
          departmentIdx: departmentIdxList.indexOf(department) - 1,
        });
        setModify();
      });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/departments/${user.departmentIdx}`)
      .then((res) => setDepartment(res.data.res.departments.name));
  }, []);
  // const handleChange = (e: ChangeEvent<HTMLInputElement>, ref: RefObject<HTMLInputElement>) => {
  //   if (ref.current) {
  //     ref.current.value = e.target.value;
  //     console.log(ref.current.value);
  //   }
  // };
  return (
    <InfoContainer>
      <img src={backGround} />
      <InfoDetail>
        {isModify ? (
          <>
            <div />
            <div>
              <span>닉네임</span>
              <input
                value={nicknameModify}
                onChange={(e) => setNicknameModify(e.target.value)}
                ref={nickNameRef}
              ></input>
            </div>
          </>
        ) : (
          <div>
            <span>{user.nickname} 님</span>
          </div>
        )}
        <div>
          <span>성명</span>
          {isModify ? (
            <input value={nameModify} onChange={(e) => setNameModify(e.target.value)} ref={nameRef}></input>
          ) : (
            <span>{user.name}</span>
          )}
        </div>
        <div>
          <span>학번</span>
          {isModify ? (
            <input
              value={studentIdModify}
              onChange={(e) => setStudentIdModify(Number(e.target.value))}
              ref={studentIDRef}
            ></input>
          ) : (
            <span>{user.studentId}</span>
          )}
        </div>
        <div>
          <span>학과</span>
          {isModify ? (
            <select ref={departmentRef} value={department} onChange={(e) => setDepartment(e.target.value)}>
              {departmentList.map((department) => (
                <option value={department} key={department}>
                  {department}
                </option>
              ))}
            </select>
          ) : (
            <span>{department}</span>
          )}
        </div>
        <div>
          <span>전화번호</span>
          {isModify ? (
            <input value={phoneModify} onChange={(e) => setPhoneModify(e.target.value)} ref={phoneRef}></input>
          ) : (
            <span>{user.phoneNumber}</span>
          )}
        </div>
      </InfoDetail>
      <InfoRightContainer>
        <ImageDetail>
          <div>{user.profilePhoto ? <img src={user.profilePhoto} /> : <span>이미지를 등록해주세요.</span>}</div>
          <div>캐릭터가 들어갈 예정</div>
        </ImageDetail>
        <InfoButtonContainer>
          {isModify ? (
            <Button name="저장하기" clickEvent={() => clickSave()} />
          ) : (
            <Button name="정보수정" clickEvent={() => setModify()} />
          )}
        </InfoButtonContainer>
      </InfoRightContainer>
    </InfoContainer>
  );
};
export default MyInfo;
