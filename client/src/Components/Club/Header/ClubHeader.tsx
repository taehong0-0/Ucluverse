import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ClubHeaderContainer } from './style';
import {} from './style';
interface props {
  title: string;
  hashtags: string[];
  clubId: number;
}
const ClubHeader = (props: props): ReactElement => {
  const { title, hashtags, clubId } = props;
  return (
    <ClubHeaderContainer>
      <Link to={`/club/${clubId}`}>
        <span>{title}</span>
      </Link>
      <div>
        {hashtags.map((hashtag) => (
          <span>#{hashtag}</span>
        ))}
      </div>
    </ClubHeaderContainer>
  );
};
export default ClubHeader;
