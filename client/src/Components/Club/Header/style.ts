import styled from 'styled-components';

export const ClubHeaderContainer = styled.div`
  margin: 0 auto;
  width: 75vw;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    font: normal normal bold 36px/40px Noto Sans KR;
    letter-spacing: -2.7px;
    color: #1a1917;
    opacity: 1;
  }
  div {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
    height: 40px;
    margin-top: 70px;
    /* UI Properties */
    border: 1px solid var(---grey1-3);
    border: 1px solid #dddae0;
    opacity: 1;
    span {
      margin-right: 10px;
      text-align: center;
      font: normal normal normal 14px/20px Noto Sans KR;
      letter-spacing: -1.05px;
      color: #9239df;
      opacity: 1;
    }
  }
`;
