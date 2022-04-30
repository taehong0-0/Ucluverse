import styled from 'styled-components';

export const NewClubContainer = styled.div`
  display: flex;
  width: 43rem;
  height: 21.875rem;
  opacity: 1;
  margin-left: 15.125rem;
  margin-top: -12.5rem;
  .club-img {
    margin-top: -5rem;
    width: 19rem;
    height: 21.875rem;
    /* UI Properties */
    box-shadow: 3px 3px 0.625rem var(---grey1-3);
    background: transparent 0% 0% no-repeat
      padding-box;
    box-shadow: 3px 3px 0.625rem #dddae0;
    border-radius: 5px;
    opacity: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 3.75rem;
    margin-left: 106px;
    img {
      width: 9.563rem;
      height: 2.25rem;
      margin-bottom: 1rem;
    }
    span {
      width: 20rem;
      text-align: left;
      font: normal normal normal 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
    }
    a {
      margin-top: 1rem;
      span {
        font: normal normal normal 18px/1.5rem Noto Sans KR;
        letter-spacing: -1.35px;
        color: #513c0e;
        opacity: 1;
      }
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
  }
`;
