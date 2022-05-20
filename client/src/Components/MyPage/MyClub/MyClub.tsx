import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../Recoil/User';
import heartImg from '../../../Assets/heart.png';
import peopleImg from '../../../Assets/people.png';
import { ClubContainer, ClubListContainer, ClubNavigator } from './style';
import { ClubType } from '../../../Types/ClubType';

const ClubList = ['동아리이름', '동아리이름', '동아리이름', '동아리이름', '동아리이름', '동아리이름', '동아리이름'];
const MyClub = (): ReactElement => {
  const user = useRecoilValue(userState);
  const [index, setIndex] = useState<number>(0);
  const [clubList, setClubList] = useState<ClubType[]>([]);

  useEffect(() => {
    const api = index === 0 ? '/' : '';
    axios.get(`${process.env.REACT_APP_SERVER_URL}${api}`).then((res) => setClubList(res.data.res.clubList));
  }, [index]);
  return (
    <ClubContainer>
      <ClubNavigator>
        <div
          className={index === 0 ? 'selected' : ''}
          onClick={() => {
            setIndex(0);
          }}
        >
          <img src={heartImg} width="40px" height="32.88px" />
        </div>
        <div
          className={index === 1 ? 'selected' : ''}
          onClick={() => {
            setIndex(1);
          }}
        >
          <img src={peopleImg} width="40px" height="25px" />
        </div>
      </ClubNavigator>
      <ClubListContainer>
        {ClubList.map((club) => (
          <div>
            <img></img>
            <span>{club}</span>
          </div>
        ))}
      </ClubListContainer>
    </ClubContainer>
  );
};
export default MyClub;
