import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../Recoil/User';
import heartImg from '../../../Assets/heart.png';
import peopleImg from '../../../Assets/people.png';
import { ClubContainer, ClubListContainer, ClubNavigator } from './style';
import { ClubType } from '../../../Types/ClubType';
import { Link } from 'react-router-dom';

const MyClub = (): ReactElement => {
  const user = useRecoilValue(userState);
  const [index, setIndex] = useState<number>(0);
  const [clubList, setClubList] = useState<ClubType[]>([]);

  useEffect(() => {
    const api =
      index === 0 ? `user/userClub/stared/clubs/${user.userIdx}` : `user/userClub/accepted/clubs/${user.userIdx}`;
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${api}`).then((res) => {
      setClubList(res.data.res.clubs);
    });
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
        {clubList?.map((club) => (
          <Link to={`/club/${club.clubIdx}`}>
            <div key={club.clubIdx}>
              <div>
                <img src={club.logoPath ?? ''} />
              </div>
              <h4>{club.name}</h4>
            </div>
          </Link>
        ))}
      </ClubListContainer>
    </ClubContainer>
  );
};
export default MyClub;
