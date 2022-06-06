import styled from 'styled-components';

export const ClubBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 100%;
  
  .top {
    /* wave */
    & > div { 
      position : absolute;
      top : 17.8rem;
      left : 0;

      @media (max-width:768px) {
        top : 22rem;
      }
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

  .title {
    display : flex;
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
      font: normal normal bold 36px/40px Noto Sans KR;
      letter-spacing: -1.75px;
      color: white;
      opacity: 1;
      margin: 40px;
    }
  }

  .content {
    margin-bottom : 6rem;
    width : 90%;
    max-width : ${(props) => props.theme.layout.maxWidth};
  }

  .contentBox {
    display : flex;
    justify-content : space-between;
    overflow : hidden;
    flex-wrap: wrap;
  }

  .bottom {
    /* wave */
    & > div { 
      position : relative;
      left : 0;
      top: 8.2rem;
      z-index : 1;

      @media (max-width:768px) {
        top: 4rem;
      }
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
