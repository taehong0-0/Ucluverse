import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 56.3vw;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 20px;
  border-bottom: 1px solid #dddae0;
  opacity: 1;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    .navigator {
      span:first-child {
        font: normal normal normal 14px/20px Noto Sans KR;
        letter-spacing: -1.05px;
        color: #846116;
        opacity: 1;
      }
      span {
        margin-right: 10px;
      }
    }
    #title {
      margin-top: 10px;
      margin-bottom: 5px;
      font: normal normal bold 24px/28px Noto Sans KR;
      letter-spacing: -1.8px;
      color: #0e0e0e;
      opacity: 1;
    }
    #time {
      text-align: left;
      font: normal normal normal 14px/20px Noto Sans KR;
      letter-spacing: -1.05px;
      color: #736f68;
      opacity: 1;
    }
  }
  & > div:last-child {
    display: flex;
    margin-right: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: flex-end;
      margin-right: 10px;
      span {
        text-align: right;
      }
    }
  }
`;
