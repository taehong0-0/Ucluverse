import styled from 'styled-components';

export const MainBoardDiv = styled.div`
  width: 304px;
  height: 216px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #dddae0;
  opacity: 1;
  padding-left: 24px;
  padding-top: 25px;
  img {
    height: 18px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    span {
      font: normal normal normal 14px Noto Sans KR;
      letter-spacing: -1.05px;
      color: #1a1917;
      opacity: 1;
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
    a {
      margin-top: 6px;
      height: 20px;
    }
  }
`;

export const MainBoardContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75vw;
  margin: 80px auto;
`;
