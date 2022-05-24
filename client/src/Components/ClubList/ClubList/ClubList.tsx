import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClubType } from '../../../Types/ClubType';
import { ClubListContainer } from './style';

interface props {
  clubList: ClubType[] | null;
}
const ClubList = (props: props) => {
  const { clubList } = props;

  return (
    <ClubListContainer>
      <div>
        {clubList?.map((club) => {
          return (
            <Link to={`/club/${club.clubIdx}`} key={club.clubIdx}>
              <div>
                {club.logoPath ? <img src={club.logoPath ?? ''}></img> : <div></div>}
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
