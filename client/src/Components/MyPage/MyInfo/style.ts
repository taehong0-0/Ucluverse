import styled from 'styled-components';

export const InfoContainer = styled.section`
  display: flex;
  width : 100%;
  height: 30rem;
  padding-top: 3rem;
  opacity: 1;
  justify-content: center;
  background: transparent linear-gradient(180deg, var(--primary-l1) 0%, var(--primary-0) 100%) 0% 0% no-repeat padding-box;

  & > img {
    z-index: 1;
    width: 100%;
    position: absolute;
  }

  /* for mobile */
  @media (max-width:768px) {
    padding-top : 14rem;
    flex-direction : row;
    padding-bottom : 10rem;
    flex-wrap : wrap-reverse;
  }
`;

export const InfoDetail = styled.section`
  z-index: 10;
  width: calc(${(props) => props.theme.layout.maxWidth} / 2);
  max-width : calc(${(props) => props.theme.layout.maxWidth} / 2);
  
  display: flex;
  flex-direction: column;
  
  h1 {
      color : white;
  }

  /* title */
  & > div {
    margin-bottom: 1.6rem;
    display: flex;

    /* button */
    section {
      margin-top : auto;
      margin-left : 4rem;
    }

    h3 {
      display: inline-block;
      width: 7rem;
      margin-right: 2rem;
      color: white;
      text-align: justify;

      + h3 {
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: normal;
      }
    }

    /* input area */
    input, select {
      width: 13rem;
      height: 1.5rem;
      border : none;
      box-shadow: 3px 3px 10px #00000029;
      margin : auto 0;
      padding-left : .5rem;
    }

    select {
      width : 13.5rem;
    }
  }

  /* for mobile */
  @media (max-width:768px) {
      max-width : 100%;
      width : 100%;

      /* input */
      div {
        justify-content : center;
      }

      /* button */
      section {
        justify-content: center;
        display : flex;
        max-width : 100%;
        margin-bottom : 2rem;
      }
  }
`;

export const InfoRightContainer = styled.section`
  width: calc(${(props) => props.theme.layout.maxWidth} / 2);
  max-width : calc(${(props) => props.theme.layout.maxWidth} / 2);
  height: 18.75rem;
  z-index: 10;
  display: flex;
  flex-direction: column;

  @media (max-width:768px) {
    width : 100%;
    max-width : 100%;
  }
`;

export const ImageDetail = styled.div`
  display: flex;
  margin-left : auto;
  height: 14rem;

  & > div {
    width: 10rem;

    background: #d4bce9 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 10px #00000029;
    border-radius: 5px;
    opacity: 1;

    img {
      width: 10rem;
      height: 14rem;
    }

    + div {
      margin-left : 2rem;
    }
  }

  /* for mobile */
  @media (max-width:768px) {
    margin-left : 0;
    justify-content: center;
  }
`;
