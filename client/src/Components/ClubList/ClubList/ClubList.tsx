import { useEffect } from 'react';
import { useState } from 'react';
import { ClubListContainer } from './style';

interface props {
  category: string;
  clubList: any[] | null;
}
const ClubList = (props: props) => {
  const { category, clubList } = props;
  const [clubShowList, setClubShowList] = useState<any[] | null>(null);
  useEffect(() => {
    if (category === '전체') setClubShowList(clubList);
    else {
      const list = clubList?.filter((club) => club.category === category);

      console.log(
        clubList?.filter((club) => {
          console.log(typeof club.category, 1, typeof category);
          return club.category === category;
        }),
      );
      setClubShowList(
        clubList?.filter((club) => club.category === category) ?? [],
      );
    }
  }, [category]);

  return (
    <ClubListContainer>
      <div>
        {clubShowList?.map((club) => {
          return (
            <div
              onClick={() =>
                window.location.replace(`/club?clubId=${club.clubIdx})`)
              }
            >
              <img src={club.imgSrc}></img>
              <span>{club.clubName}</span>
            </div>
          );
        })}
        {clubShowList?.map((club) => {
          return (
            <div
              onClick={() =>
                window.location.replace(`/club?clubId=${club.clubIdx})`)
              }
            >
              <img src={club.imgSrc}></img>
              <span>{club.clubName}</span>
            </div>
          );
        })}
        {clubShowList?.map((club) => {
          return (
            <div
              onClick={() =>
                window.location.replace(`/club?clubId=${club.clubIdx})`)
              }
            >
              <img src={club.imgSrc}></img>
              <span>{club.clubName}</span>
            </div>
          );
        })}
      </div>
    </ClubListContainer>
  );
};
export default ClubList;
