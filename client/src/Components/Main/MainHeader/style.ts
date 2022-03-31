import styled from 'styled-components';

export const MainHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 68vh;
  align-items: center;
  .background {
    width: 100vw;
    height: 68vh;
  }
  .content {
    img {
      width: 30vw;
    }
    img:last-child {
      margin-top: 25px;
      width: 35vw;
    }
    span {
      font-size: 18px;
      margin-top: 10px;
      text-align: center;
      font: normal normal normal 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -460px;
  }
`;
