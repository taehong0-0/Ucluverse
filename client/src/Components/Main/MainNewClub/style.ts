import styled from 'styled-components';

export const NewClubContainer = styled.div`
  display: flex;
  width: 688px;
  height: 350px;
  opacity: 1;
  margin-left: 242px;
  .club-img {
    margin-top: -80px;
    width: 304px;
    height: 350px;
    /* UI Properties */
    box-shadow: 3px 3px 10px var(---grey1-3);
    background: transparent url('img/사각형 148.png') 0% 0% no-repeat
      padding-box;
    box-shadow: 3px 3px 10px #dddae0;
    border-radius: 5px;
    opacity: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-left: 106px;
    img {
      width: 153px;
      height: 36px;
      margin-bottom: 16px;
    }
    span {
      width: 278px;
      text-align: left;
      font: normal normal normal 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
    }
    a {
      margin-top: 16px;
      span {
        font: normal normal normal 18px/24px Noto Sans KR;
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
