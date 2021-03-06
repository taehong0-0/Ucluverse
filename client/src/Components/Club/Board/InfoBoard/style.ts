import styled from 'styled-components';
import { BoardStyle } from '../style';

export const InfoBoardContainer = styled.div`
  width: 56.3%;
  & > div {
    ${BoardStyle}
    display: flex;
    flex-direction: column;
    img {
      width: 56.3vw;
      height: 33.5rem;
    }
    & > span {
      margin: 0.625rem;
    }
    & > span:nth-of-type(1) {
      text-align: left;
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #1a1917;
      opacity: 1;
    }
    & > span:nth-of-type(2) {
      display: block;
      height: 6.25rem;
      font: normal normal normal 1rem/1.5rem Noto Sans KR;
      letter-spacing: -0.8px;
      color: #1a1917;
      opacity: 1;
    }
  }
`;
