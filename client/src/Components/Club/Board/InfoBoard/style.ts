import styled from 'styled-components';
import { BoardStyle } from '../style';

export const InfoBoardContainer = styled.div`
  ${BoardStyle}
  display: flex;
  flex-direction: column;
  img {
    width: 56.3vw;
    height: 536px;
  }
  & > span {
    margin: 10px;
  }
  & > span:nth-of-type(1) {
    text-align: left;
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
    opacity: 1;
  }
  & > span:nth-of-type(2) {
    display: block;
    height: 100px;
    font: normal normal normal 16px/24px Noto Sans KR;
    letter-spacing: -0.8px;
    color: #1a1917;
    opacity: 1;
  }
`;
