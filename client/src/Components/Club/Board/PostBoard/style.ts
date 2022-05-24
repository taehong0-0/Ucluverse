import styled from 'styled-components';
import { BoardStyle } from '../style';

export const ClubBoardContainer = styled.div`
  width: 56.3%;
  & > div:first-child {
    ${BoardStyle}
  }

  button {
    margin-top: 1.25rem;
    margin-left: 48rem;
  }
`;
export const PostContainer = styled.div`
  width: 100%;
  overflow: auto;
`;
