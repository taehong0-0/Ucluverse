import { InfoBoardContainer } from './style';
import test3 from '../../../../Assets/test3.jpeg';

const InfoBoard = () => {
  return (
    <InfoBoardContainer>
      <div className="navigator">
        <span>Home</span>
        <span>{'>'}</span>
        <span>동아리 소개</span>
      </div>
      <img src={test3} />
      <span>동아리 이름</span>
      <span>동아리 소개</span>
    </InfoBoardContainer>
  );
};
export default InfoBoard;
