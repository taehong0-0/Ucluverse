import styled from 'styled-components';

export const AwardContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* UI Properties */
  background: transparent
    linear-gradient(
      180deg,
      #53009b80 0%,
      #8352ac 4%,
      #7b39b4 17%,
      #c19f57 61%,
      #ffe3a8bf 74%,
      #ffe3a880 84%,
      #eed09000 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;

  & > div:nth-child(1) {
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
      color: #fffdf9;
      opacity: 1;
    }
  }
  .slick-slider {
    width: 130vw;
    height: 500px;
    margin-left: -15vw;
  }
  .slick-track {
    .slick-slide {
      height: 468px;
      background: transparent 0% 0% no-repeat padding-box;
    }
    .slick-active {
      img {
        position: absolute;
        margin: auto;
        z-index: 0;
      }
    }
  }
`;
export const AwardDiv = styled.div`
  width: 304px;
  height: 468px;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #1a1917;
  opacity: 1;
  text-align: center;
  & > span:first-child {
    display: inline-block;
    margin-top: 300px;
    font: normal normal bold 24px/28px Noto Sans KR;
    letter-spacing: -1.8px;
    color: #eed090;
    opacity: 1;
    z-index: 10;
  }
  div {
    margin-top: 20px;
    font: normal normal medium 20px/22px Noto Sans KR;
    letter-spacing: -1.5px;
    color: #eed090;
    z-index: 10;
    span:first-child {
      display: inline-block;
      margin-right: 3px;
      font: normal normal medium 20px/22px Noto Sans KR;
      letter-spacing: -1.5px;
      color: #ffffff;
    }
  }
`;
