import styled from 'styled-components';

export const ClubHeaderContainer = styled.div`
  margin: 0 auto;
  width: 75vw;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    font: normal normal bold 2.25rem/2.5rem Noto Sans KR;
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
    height: 2.5rem;
    margin-top: 4.375rem;
    /* UI Properties */
    border: 1px solid var(---grey1-3);
    border: 1px solid #dddae0;
    opacity: 1;
    span {
      margin-right: 0.625rem;
      text-align: center;
      font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #9239df;
      opacity: 1;
    }
  }
`;
