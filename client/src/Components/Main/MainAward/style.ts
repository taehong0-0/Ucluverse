import styled from 'styled-components';

export const AwardContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 74rem;
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
      margin-top: 3.75rem;
      height: 2.25rem;
    }
    span {
      margin-top: 1rem;
      width: 17.375rem;
      height: 1.625rem;
      text-align: center;
      font: normal normal normal 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #fffdf9;
      opacity: 1;
    }
  }
  .slick-slider {
    margin-top: 6.25rem;
    width: 130vw;
    height: 31.25rem;
    margin-left: -15vw;
  }
`;
export const AwardDiv = styled.div`
  cursor: pointer;
  width: 19rem;
  height: 29.25rem;
  z-index: 1;
  opacity: 1;
  img {
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 0.625rem #211f1f;
    opacity: 1;
    z-index: 0;
  }
  & > div {
    position: absolute;
    margin-top: -5rem;
    text-align: center;
    width: 19rem;
    height: 8.188rem;
    background: transparent
      linear-gradient(180deg, #0e131100 0%, #151e1bbf 45%, #22342f 100%) 0% 0%
      no-repeat padding-box;
    border-radius: 0px 0px 5px 5px;
    opacity: 1;
    z-index: 999;
    & > span:nth-of-type(1) {
      margin-top: -1.25rem;
      display: inline-block;
      font: normal normal bold 1.5rem/1.75rem Noto Sans KR;
      letter-spacing: -1.8px;
      color: #eed090;
      opacity: 1;
    }
    div {
      margin-top: 0.625rem;
      font: normal normal medium 1.25rem/1.375rem Noto Sans KR;
      letter-spacing: -1.5px;
      color: #eed090;
      span:first-child {
        display: inline-block;
        margin-right: 0.938rem;
        font: normal normal medium 1.25rem/1.375rem Noto Sans KR;
        letter-spacing: -1.5px;
        color: #ffffff;
      }
    }
  }
`;
