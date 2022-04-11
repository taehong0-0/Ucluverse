import React, { ReactElement } from 'react';
import { ClubHeaderContainer } from './style';
import {} from './style';
interface props {
  title: string;
  hashtags: string[];
}
const ClubHeader = (props: props): ReactElement => {
  const { title, hashtags } = props;
  return (
    <ClubHeaderContainer>
      <span>{title}</span>
      <div>
        {hashtags.map((hashtag) => (
          <span>#{hashtag}</span>
        ))}
      </div>
    </ClubHeaderContainer>
  );
};
export default ClubHeader;
