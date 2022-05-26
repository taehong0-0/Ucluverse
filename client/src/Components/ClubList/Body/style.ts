import styled from 'styled-components';

export const ClubBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display : flex;
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
      font: normal normal bold 36px/40px Noto Sans KR;
      letter-spacing: -2.7px;
      color: #ffffff;
      opacity: 1;
      margin: 40px;
    }
  }

  .content {
    margin-bottom : 6rem;
  }

  .top {
    /* wave */
    & > div { 
      position : absolute;
      top : 280px;
      left : 0;
    }
    /* background */
    & > .topBG {
      position : absolute;
      left : 0;
      top : 100px;
      background: #1c072c 0% 0% no-repeat padding-box;
      height : 20rem;
      width : 100vw;
    }
  }

  .bottom {
    /* wave */
    & > div { 
      position : relative;
      left : 0;
      top: 130px;
      z-index : 1;
    }
    /* background */
    & > .bottomBG {
      position : relative;
      left : 0;
      top : 0;
      background: #1c072c 0% 0% no-repeat padding-box;
      height : 8rem;
      width : 100vw;
      z-index : 0;
    }
  }

  /* lottie */
  #lottieYukey {
    position : relative;
  }
`;
