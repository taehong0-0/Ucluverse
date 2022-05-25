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
      height: 21.875rem;
      line-height: 21.875rem;
      div {
        vertical-align: middle;
      }
    }
    .slick-active {
      img {
        box-shadow: 3px 3px 0.625rem;
        background: transparent 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 0.625rem #a3a1a6;
        border-radius: 5px;
        opacity: 1;
      }
    }
    /* .slick-current {
      img {
        width: 31.25rem;
        height: 18.75rem;
        opacity: 0.45;
      }
    } */
  }
  img {
    margin: 0 auto;
  }
  span:nth-of-type(1) {
    width: 15.25rem;
    height: 1.625rem;
    text-align: center;
    font: normal normal normal 18px/1.5rem Noto Sans KR;
    letter-spacing: -1.35px;
    color: #a19279;
    opacity: 1;
    margin-top: 1rem;
    margin: 1rem auto;
  }
  a {
    margin: 0 auto;
    span {
      width: 32px;
      height: 1.063rem;
      text-align: center;
      font: normal normal 300 12px/1rem Noto Sans KR;
      letter-spacing: -0.6px;
      color: #736f68;
      opacity: 1;
    }
  }

  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
  }
`;
