import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* align-items: center; */
  .slick-slider {
    width: 160vw;
    margin-left: -30vw;
  }
  .slick-track {
    .slick-slide {
      height: 350px;
      line-height: 350px;
      div {
        vertical-align: middle;
      }
    }
    .slick-active {
      img {
        width: 468px;
        height: 350px;
        box-shadow: 3px 3px 10px;
        background: transparent 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 10px #a3a1a6;
        border-radius: 5px;
        opacity: 1;
      }
    }
    .slick-current {
      img {
        width: 500px;
        height: 300px;
        opacity: 0.45;
      }
    }
  }
  img {
    margin: 0 auto;
  }
  span:nth-of-type(1) {
    width: 244px;
    height: 26px;
    text-align: center;
    font: normal normal normal 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #a19279;
    opacity: 1;
    margin-top: 16px;
    margin: 16px auto;
  }
  a {
    margin: 0 auto;
    span {
      width: 32px;
      height: 17px;
      text-align: center;
      font: normal normal 300 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #736f68;
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
`;
