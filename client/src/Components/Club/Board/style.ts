import { css } from 'styled-components';

export const BoardStyle = css`
  margin-left: 20px;
  width: 56.3vw;
  min-height: 70vh;

  border-radius: 0px 0px 5px 5px;
  border: 1px solid #dddae0;
  height: max-content;
  .navigator {
    height: 53px;
    span:first-child {
      margin-left: 10px;
      line-height: 53px;
      font: normal normal normal 14px/20px Noto Sans KR;
      letter-spacing: -1.05px;
      color: #846116;
      opacity: 1;
    }
    span {
      line-height: 53px;
      margin-right: 10px;
    }
  }
`;
