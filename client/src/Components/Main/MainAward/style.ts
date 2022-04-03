import styled from 'styled-components';

export const AwardContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 100vh;
  /* UI Properties */
  background: 0% 0% no-repeat padding-box;
  background: #fffdf9 0% 0% no-repeat padding-box;
  opacity: 1;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 60px;
      height: 36px;
    }
    span {
      margin-top: 16px;
      width: 246px;
      height: 26px;
      text-align: center;
      font: normal normal normal 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
    }
  }
`;
