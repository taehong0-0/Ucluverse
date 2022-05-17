import { InfoBoardContainer } from './style';
import test3 from '../../../../Assets/test3.jpeg';
import { useContext } from 'react';
import { ClubContext } from '../../../../Pages/Club/Club';

const InfoBoard = () => {
  const contextValue = useContext(ClubContext);
  const club = contextValue?.club;
  return (
    <InfoBoardContainer>
      <div className="navigator">
        <span>Home</span>
        <span>{'>'}</span>
        <span>동아리 소개</span>
      </div>
      <img src={club?.introductionPath} />
      <span>{club?.name}</span>
      <span>{club?.introductionDesc}</span>
    </InfoBoardContainer>
  );
};
export default InfoBoard;
