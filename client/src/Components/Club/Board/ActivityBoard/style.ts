import styled from 'styled-components';
import { BoardStyle } from '../style';

export const ActivityBoardContainer = styled.div`
  & > div:first-child {
    ${BoardStyle}
    display: flex;
    flex-wrap: wrap;
  }

  a:last-child {
    button {
      margin-top: 1.25rem;
      margin-left: 48rem;
    }
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 24px;
  margin-bottom: 24px; */
  margin: 24px;
  margin-bottom: 0px;
  img {
    width: 222px;
    height: 200px;
    border-radius: 5px;
    opacity: 1;
  }
  & > div {
    display: flex;
    width: 222px;
    /* margin-top: 10px; */
    height: 30px;
    line-height: 30px;
    justify-content: space-between;
    align-items: center;
    span:first-child {
      font: normal normal bold 14px/16px Noto Sans KR;
      letter-spacing: -0.7px;
      color: #0e0e0e;
      opacity: 1;
    }
    span:last-child {
      font: normal normal normal 14px/16px Noto Sans KR;
      letter-spacing: -0.7px;
      color: #0e0e0e;
      opacity: 1;
    }
  }
`;
