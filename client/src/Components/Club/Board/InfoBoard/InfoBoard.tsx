import { useContext } from 'react';
import { InfoBoardContainer } from './style';
import { ClubContext } from '../../../../Pages/Club/Club';

function InfoBoard() {
  const contextValue = useContext(ClubContext);
  const club = contextValue?.club;
  return (
    <InfoBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>동아리 소개</span>
        </div>
        <img alt="" src={club?.logoPath ?? ''} />
        <span>{club?.name}</span>
        <span>{club?.introductionDesc}</span>
      </div>
    </InfoBoardContainer>
  );
}
export default InfoBoard;
