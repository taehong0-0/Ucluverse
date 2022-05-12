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
            // <div
            //   onClick={() => {
            //     history.pushState(null, '', `/club?clubId=${club.clubIdx}`);
            //     window.location.replace(`/club?clubId=${club.clubIdx}`);
            //   }}
            // >
            //   <img src={club.imgSrc}></img>
            //   <span>{club.name}</span>
            // </div>
            <Link to={`/club?clubId=${club.clubIdx}`}>
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
