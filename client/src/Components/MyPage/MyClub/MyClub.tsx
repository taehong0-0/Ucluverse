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
      console.log(res.data);
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
        <a>
          <div>
            <div>
              <img src="https://images.unsplash.com/photo-1653314622658-4a34c996b410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
              </img>
            </div>
            <h4>
              ㅎㅇ
            </h4>
          </div>
        </a>
        <a>
          <div>
            <img>
            </img>
            <h4>
              ㅎㅇ
            </h4>
          </div>
        </a>
        <a>
          <div>
            <img>
            </img>
            <h4>
              ㅎㅇ
            </h4>
          </div>
        </a>
        <a>
          <div>
            <img>
            </img>
            <h4>
              안녕
            </h4>
          </div>
        </a>
        <a>
          <div>
            <img>
            </img>
            <h4>
              안녕
            </h4>
          </div>
        </a>
      </ClubListContainer>
    </ClubContainer>
  );
};
export default MyClub;

// {clubList?.map((club) => (
//   <Link to={`/club/${club.clubIdx}`}>
//     <div key={club.clubIdx}>
//       <div>
//         <img src={club.logoPath ?? ''}/>
//       </div>
//       <h4>{club.name}</h4>
//     </div>
//   </Link>
// ))}