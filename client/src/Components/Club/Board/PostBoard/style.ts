import styled from 'styled-components';
import { BoardStyle } from '../style';

export const ClubBoardContainer = styled.div`
  ${BoardStyle}
  a:last-child {
    button {
      margin-top: 1.25rem;
      margin-left: 52vw;
    }
  }
`;
