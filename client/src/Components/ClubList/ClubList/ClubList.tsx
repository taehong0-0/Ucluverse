import { Link } from 'react-router-dom';
import { ClubType } from '../../../Types/ClubType';
import { ClubListContainer } from './style';

interface IProps {
  clubList: ClubType[] | null;
}
function ClubList(props: IProps) {
  const { clubList } = props;

  return (
    <ClubListContainer>
      <div>
        {clubList?.map((club) => {
          return (
            <Link to={`/club/${club.clubIdx}`} key={club.clubIdx}>
              <div>
                {club.logoPath ? <img alt="" src={club.logoPath ?? ''} /> : <div />}
                <span>{club.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </ClubListContainer>
  );
}
export default ClubList;
