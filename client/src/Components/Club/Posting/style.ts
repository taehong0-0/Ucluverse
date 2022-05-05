import styled from 'styled-components';
import { BoardStyle } from '../Board/style';

export const PostingContainer = styled.div`
  ${BoardStyle}
  div:first-child {
    margin-left: 1.25rem;
  }
  button {
    margin-top: 0.625rem;
    margin-left: 52vw;
  }
`;
