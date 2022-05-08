import { css } from 'styled-components';

export const BoardStyle = css`
  margin-left: 1.25rem;
  width: 56.3vw;
  min-height: 70vh;

  border-radius: 0px 0px 5px 5px;
  border: 1px solid #dddae0;
  height: max-content;
  .navigator {
    height: 3.313rem;
    border-bottom: 1px solid #dddae0;
    span:first-child {
      margin-left: 0.625rem;
      line-height: 3.313rem;
      font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #846116;
      opacity: 1;
    }
    span {
      line-height: 3.313rem;
      margin-right: 0.625rem;
    }
  }
`;
