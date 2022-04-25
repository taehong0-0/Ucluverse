import styled from 'styled-components';
import { BoardStyle } from '../Board/style';

export const PostingContainer = styled.div`
  ${BoardStyle}
  div:first-child {
    margin-left: 20px;
  }
  button {
    margin-top: 10px;
    margin-left: 52vw;
  }
`;
