import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClubListContainer } from './style';

interface props {
  clubList: any[] | null;
}
const ClubList = (props: props) => {
  const { clubList } = props;

  return (
    <ClubListContainer>
      <div>
        {clubList?.map((club) => {
          return (
            <Link to={`/club/${club.clubIdx}`}>
              <div>
                <img src={club.imgSrc}></img>
                <span>{club.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </ClubListContainer>
  );
};
export default ClubList;
