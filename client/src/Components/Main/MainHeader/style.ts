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

export const SearchBarDiv = styled.section`
  display: flex;
  width: 29.25rem;
  height: 2.5rem;
  margin-top: 2.813rem;
  background: white;
  box-shadow: 6px 3px 0.625rem var(--shadow-purple-0);
  overflow: hidden;
  justify-content : center;

  @media (max-width:768px) {
    width : 75vw;
  }
`;

export const SearchDataContainer = styled.section`
  position: absolute;
  margin-top: 3.2rem;
  width: 29.25rem;
  height: 12rem;
  background-color: white;
  box-shadow: 3px 3px 0.625rem var(--shadow-purple-0);
  overflow: auto;

  a {
    span {
      display: block;
      margin-left: 18px;
      margin-top: 12px;
      letter-spacing: -0.6px;
      color: var(--grey2-8);

      strong {
        color : var(--primary-0);
        font-weight : 600;
      }
    }

    span, strong {
      font-size: 14px;
      letter-spacing: -0.075rem;
    }
  }

  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width : 75vw;
  }
`;

export const SearchBarContainer = styled.section`
  width : 100%;
  max-width : ${(props) => props.theme.layout.maxWidth};

  input {
    width : calc(100% - 2.5rem);
    font: normal normal normal 0.875rem Noto Sans KR;
    letter-spacing: -0.04rem;
    height: 2.5rem;
    text-indent: 1.25rem;
    border: none;
  }
  
  input:focus {
    outline: none;
  }
  
  button {
    cursor: pointer;
    position : relative;
    float : right;
    height: 2.5rem;
    width : 2.5rem;
    background-color: var(--primary-l1);
    border: none;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }

    :hover {
      background: transparent linear-gradient(180deg, var(--primary-l1) 0%, var(--primary-0) 100%);
    }
  }

  @media (max-width: 768px) {
    input {
      width : calc(100%-2rem);
    }

    button  {
      width : 2rem;

      img {
        width : 1rem;
      }
    }
  }
`