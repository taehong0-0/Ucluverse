import styled from 'styled-components';
import { BoardStyle } from '../style';

export const ClubBoardContainer = styled.div`
  & > div:first-child {
    ${BoardStyle}
  }

  button {
    margin-top: 1.25rem;
    margin-left: 48rem;
  }
`;
export const PostContainer = styled.div`
  overflow: auto;
`;
