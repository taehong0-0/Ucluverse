import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const slideUp = keyframes`
from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const AwardContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 74rem;
  overflow: hidden;
  opacity: 1;
  background: linear-gradient(60deg, var(--primary-l1) 0%, var(--primary-0) 100%);
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
    width: 130%;
    height: 31.25rem;
    margin-left: -15%;
  }
  .slick-track div {
    z-index: 1;
    /* display: flex; */
    justify-content: center;
  }
`;


export const AwardDiv = styled.div`
  cursor: pointer;
  width: 100%;
  height: 29.25rem;
  z-index: 1;
  opacity: 1;
  margin: 0 auto;
  img {
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 0.625rem #211f1f;
    opacity: 1;
    z-index: 0;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: -9rem;
    text-align: center;
    width: 19rem;
    height: 8.188rem;
    background: transparent linear-gradient(180deg, #0e131100 0%, #151e1bbf 45%, #22342f 100%) 0% 0% no-repeat
      padding-box;
    border-radius: 0px 0px 5px 5px;
    opacity: 1;
    justify-content: center;
    z-index: 999;
    & > span:nth-of-type(1) {
      display: inline-block;
      font: normal normal bold 1.5rem/1.75rem Noto Sans KR;
      letter-spacing: -1.8px;
      color: #eed090;
      opacity: 1;
    }
    div {
      z-index: 999;
      width: 200px;
      margin-top: 0.625rem;
      font: normal normal medium 1.25rem/1.375rem Noto Sans KR;
      letter-spacing: -1.5px;
      color: #eed090;
      span {
        display: inline-block;
        overflow: hidden;
      }
      span:first-child {
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 0.938rem;
        font: normal normal medium 1.25rem/1.375rem Noto Sans KR;
        letter-spacing: -1.5px;
        color: #ffffff;
      }
      span:last-child {
        display: none;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-top: 20px;
        margin-bottom: 50px;
        width: 237px;
        overflow: hidden;
        word-break: break-all;
        /* white-space: nowrap; */
        text-overflow: ellipsis;
        /* UI Properties */
        text-align: left;
        opacity: 1;
        font: normal normal bold 16px/24px Noto Sans KR;
        letter-spacing: -1.2px;
        color: #ffffff;
        animation-duration: 0.25s; //진행시간
        animation-timing-function: ease-out; //처음엔 빨리나타다가 서서히 느려진다.
        animation-name: ${slideUp}; //사용되는 트랜지션 효과이름
        animation-fill-mode: forwards; //트랜지션효과가 나타난 이후 그대로 유지한다.
      }
      .award-border {
        margin-top: -4px;
        width: 0px;
        height: 5px;
        border-radius: 5px;
        background: #eed090 0% 0% no-repeat padding-box;
        transition: width 0.4s;
      }
    }
  }
  .award-border.active {
    width: 13.125rem !important;
  }
  .award-detail.active {
    display: -webkit-box;
    -webkit-transition: opacity 2s ease-in;
    -moz-transition: opacity 2s ease-in;
    -o-transition: opacity 2s ease-in;
    -ms-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;
  }
  & > div:hover {
    .award-border {
      width: 13.125rem;
    }
    .award-detail {
      display: -webkit-box;
    }
  }
`;
