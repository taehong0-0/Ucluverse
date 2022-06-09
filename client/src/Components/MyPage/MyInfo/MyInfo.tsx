import axios from 'axios';
import React, { ChangeEvent, ReactElement, RefObject, useRef, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDataState, userState } from '../../../Recoil/User';
import { InfoRightContainer, InfoContainer, InfoDetail, ImageDetail } from './style';
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
      <InfoDetail>
        {isModify ? (
          <>
            <div>
              <h3>닉네임</h3>
              <input
                value={nicknameModify}
                onChange={(e) => setNicknameModify(e.target.value)}
                ref={nickNameRef}
              ></input>
            </div>
          </>
        ) : (
          <div>
            <h1>{user.nickname} 님</h1>
            {/* <section>
            <InfoButtonContainer>
              {isModify ? (
                <Button name="저장하기" clickEvent={() => clickSave()} />
              ) : (
                <Button name="정보수정" clickEvent={() => setModify()} />
              )}
            </InfoButtonContainer>
         </section> */}
          </div>
        )}
        <div>
          <h3>성명</h3>
          {isModify ? (
            <input value={nameModify} onChange={(e) => setNameModify(e.target.value)} ref={nameRef}></input>
          ) : (
            <h3>{user.name}</h3>
          )}
        </div>
        <div>
          <h3>학번</h3>
          {isModify ? (
            <input
              value={studentIdModify}
              onChange={(e) => setStudentIdModify(Number(e.target.value))}
              ref={studentIDRef}
            ></input>
          ) : (
            <h3>{user.studentId}</h3>
          )}
        </div>
        <div>
          <h3>학과</h3>
          {isModify ? (
            <select ref={departmentRef} value={department} onChange={(e) => setDepartment(e.target.value)}>
              {departmentList.map((department) => (
                <option value={department} key={department}>
                  {department}
                </option>
              ))}
            </select>
          ) : (
            <h3>{department}</h3>
          )}
        </div>
        <div>
          <h3>전화번호</h3>
          {isModify ? (
            <input value={phoneModify} onChange={(e) => setPhoneModify(e.target.value)} ref={phoneRef}></input>
          ) : (
            <h3>{user.phoneNumber}</h3>
          )}
        </div>
        <section>
          {isModify ? (
            <Button name="저장하기" clickEvent={() => clickSave()} />
          ) : (
            <Button name="정보수정" clickEvent={() => setModify()} />
          )}
        </section>
      </InfoDetail>
      <InfoRightContainer>
        <ImageDetail>
          <div>{user.profilePhoto ? <img src={user.profilePhoto} /> : <span>이미지를 등록해주세요.</span>}</div>
          <div>캐릭터가 들어갈 예정</div>
        </ImageDetail>
      </InfoRightContainer>
    </InfoContainer>
  );
};
export default MyInfo;
