import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11.9vw;
  width: 17.3vw;
  overflow: hidden;
  button {
    width: 17.3vw;
    height: 53px;
    /* UI Properties */
    background: var(---secondary-0) 0% 0% no-repeat padding-box;
    background: #846116 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal bold 24px/28px Noto Sans KR;
    color: #ffffff;
    cursor: pointer;
    border: none;
  }
  & > span:nth-of-type(1) {
    margin-left: 10px;
    margin-top: 16px;
    margin-bottom: 14px;
    vertical-align: middle;
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
  }
`;

export const BoardContainer = styled.div`
  width: 17.3vw;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffb925;
  border-top: 2px solid #ffb925;
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-bottom: 10px;
    width: 17.3vw;
    & > span {
      font: normal normal bold 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #1a1917;
    }
    a {
      margin-left: 16px;
      .board-name {
        height: 22px;
        font: normal normal 300 18px/24px Noto Sans KR;
        letter-spacing: -1.35px;
        color: #0e0e0e;
      }
    }
  }
  & > div:first-child {
    margin-left: 0px;
    padding-left: 10px;
    border-bottom: 1px solid #a19279;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
