import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 56.3vw;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-left: 1.25rem;
  border-bottom: 1px solid #dddae0;
  opacity: 1;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    .navigator {
      span:first-child {
        font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
        letter-spacing: -1.05px;
        color: #846116;
        opacity: 1;
      }
      span {
        margin-right: 0.625rem;
      }
    }
    #title {
      margin-top: 0.625rem;
      margin-bottom: 5px;
      font: normal normal bold 1.5rem/1.75rem Noto Sans KR;
      letter-spacing: -1.8px;
      color: #0e0e0e;
      opacity: 1;
    }
    #time {
      text-align: left;
      font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #736f68;
      opacity: 1;
    }
  }
  .info {
    display: flex;
    margin-right: 1.25rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: flex-end;
      margin-right: 0.625rem;
      span {
        text-align: right;
      }
    }
    div:last-child {
      width: 90px;
      height: 90px;
      border: 1px solid black;
    }
  }
`;
