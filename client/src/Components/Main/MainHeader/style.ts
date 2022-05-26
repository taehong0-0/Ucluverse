import styled from 'styled-components';

export const MainHeaderDiv = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 68vh;
  align-items: center;

  .background {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 68vh;
  }
  .content, .content > article {
    z-index: 999;
    .main-header {
      //width : 27vw;
      width: 350px;
      position : relative;
    }
    & > span {
      position : static;
      top: 14.688rem;
      left: 32.563rem;
      width: 16.875rem;
      height: 1.625rem;
      text-align: center;
      font: normal normal normal 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
      margin-top: 0.938rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }


  /* lottie data */
  #lottie {
    @media (min-width: 1024px) {
      left : 24%;
      top : 12%;
      }
  }

  #lottie2 {
    @media (min-width: 1024px) {
      left : 63.5%;
      top : 22%;
      }
  }

  #lottie3 {
    animation : flowLeft 20s infinite;
    top : 24%;
    position : absolute;
    display : block;
  }

  #lottieBG {
    top : 15%;
    left : 0%;
    display : block;
    position : absolute;
  }

  @keyframes flowLeft {
      from {
        left : 90%;
      }
      to {
        left : -30%;
      }
  }
`;

export const SearchBarDiv = styled.div`
  display: flex;
  /* width: 36vw; */
  width: 468px;
  height: 2.813rem;
  margin-top: 2.813rem;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 0.625rem #dddae0;
  border-radius: 5px;
  opacity: 1;
  overflow: hidden;
  input {
    width: 405px;
    font: normal normal normal 14px Noto Sans KR;
    letter-spacing: -0.75px;
    height: 2.813rem;
    border: none;
    text-indent: 1.25rem;
  }
  input:focus {
    outline: none;
  }
  button {
    cursor: pointer;
    width: 63px;
    background-color: #a45de2;
    border: none;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width : 768px) {
    max-width : 468px;
    width : 72vw;
      input {
        max-width : 405px;
        width : 68vw;
      }
  }
`;
export const SearchDataContainer = styled.div`
  position: absolute;
  margin-top: 3.2rem;
  width: 468px;
  height: 12rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 0.625rem #dddae0;
  border-radius: 5px;
  opacity: 1;
  overflow: auto;
  a {
    span {
      display: block;
      margin-left: 18px;
      margin-top: 12px;
      font: normal normal normal 16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #1a1917;
    }
  }
  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width : 72vw;
  }
`;
