import styled from 'styled-components';

export const NewClubContainer = styled.div`
  display: flex;
  width: 43rem;
  height: 21.875rem;
  opacity: 1;
  margin-left: 15.125rem;
  margin-top: -12.5rem;
  & > div:first-child {
    margin-top: -5rem;
    width: 19rem;
    height: 21.875rem;
    overflow: hidden;
    box-shadow: 3px 3px 10px #dddae0;
    .club-img {
      width: 19rem;
      height: 21.875rem;
      /* UI Properties */
      box-shadow: 3px 3px 0.625rem var(---grey1-3);
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 3px 3px 0.625rem #dddae0;
      border-radius: 5px;
      opacity: 1;
      transition: all 0.2s linear;
    }
    div {
      z-index: 1;
      position: relative;
      width: 19rem;
      height: 5rem;
      background-color: #fff;
      top: -180px;
      left: -110px;
      opacity: 0;
      transition: all 0.2s linear;
      span {
        display: block;
        margin-left: 20px;
        margin-top: 20px;
        font: normal normal bold 24px/22px Noto Sans KR;
        letter-spacing: -1.8px;
        color: #6d00b9;
      }
    }
    button {
      opacity: 0;
      cursor: pointer;
      transition: all 0.2s linear;
      z-index: 999;
      position: relative;
      left: 14rem;
      top: -48px;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 100% 0% 0% 0%;
      background: transparent linear-gradient(180deg, #63239b 0%, #9239df 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 1px 1px 4px #a45de2;
      background-color: black;
      span {
        display: block;
        color: #fff;
        margin-left: 10px;
        margin-top: 10px;
        font-size: 24px;
      }
    }
  }
  div:first-child:hover {
    .club-img {
      transform: scale(1.1);
    }
    div {
      opacity: 1;
    }
    button {
      opacity: 1;
    }
  }
  div:last-child {
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
