import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRecoilValue } from 'recoil';
import { ClubHeaderContainer } from './style';
import { userState } from '../../../Recoil/User';
import api from '../../../Util/helpers/Auth/Api';

interface IProps {
  title: string;
  hashtags: string[];
  clubId: number;
}
function ClubHeader(props: IProps): ReactElement {
  const { title, hashtags, clubId } = props;
  const user = useRecoilValue(userState);
  const [like, setLike] = useState<boolean>(user.starredClubs.includes(clubId));
  const onClick = () => {
    setLike((prev) => !prev);
    api.post('/user/userClub/star', {
      userIdx: user.userIdx,
      clubIdx: clubId,
    });
  };
  return (
    <ClubHeaderContainer>
      <Link to={`/club/${clubId}`}>
        <span>{title}</span>
      </Link>
      {like ? (
        <FavoriteIcon id="like" onClick={onClick} />
      ) : (
        <FavoriteBorderIcon id="like" onClick={onClick} />
      )}
      <div>
        {hashtags.map((hashtag) => (
          <span key={hashtag}>#{hashtag}</span>
        ))}
      </div>
    </ClubHeaderContainer>
  );
}
export default ClubHeader;
