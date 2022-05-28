import styled from 'styled-components';

export const ClubContainer = styled.section`
  display: flex;
  width : 90vw;
  height: auto;
  margin : 0 5vw;
  justify-content : center;
`;

export const ClubNavigator = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  width : 10rem;

  & > div {
    width: 99px;
    height: 49px;
    cursor: pointer;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent 0% 0% no-repeat padding-box;
    background-color: #ffffffbf;
    box-shadow: 3px 3px 10px #00000029;
    border-radius: 5px;
    opacity: 1;
  }

  .selected {
    background: transparent 0% 0% no-repeat padding-box;
    background-color: #ffe3a8;
    box-shadow: 3px 3px 10px #00000029;
    border-radius: 5px;
    opacity: 1;
  }
`;

export const ClubListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  width: calc(${(props) => props.theme.layout.maxWidth} - 10rem);
  max-width: calc(${(props) => props.theme.layout.maxWidth} - 10rem);
  padding : 1rem 0;
  height : 30rem;
  
  background: #d4bce980 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #00000029;

  /* scrollbar */
  &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      margin-right: 20px;
      background-color : white;
      box-shadow: 1px 1px 4px #00000029;
    }
    
    &::-webkit-scrollbar-thumb {
      margin-right: 20px;
      width: 3px;
      height: 3px;
      background : transparent linear-gradient(180deg, #7D3DB4 0%, #502280 100%) 0% 0% no-repeat padding-box;
      border-radius: 1.25rem;
      opacity: 1;
    }

  & > a {
    width: calc((${(props) => props.theme.layout.maxWidth} - 10rem) / 4 - 2rem);
    height : calc((${(props) => props.theme.layout.maxWidth} - 10rem) / 4 - 2rem);
    cursor : pointer;
    margin : 2rem 0 4rem 0;

    /* picture area */
    div {
      display: flex;
      flex-direction: column;
      overflow : hidden;

      img {
        width: calc((${(props) => props.theme.layout.maxWidth} - 10rem) / 4 - 2rem);
        height: calc((${(props) => props.theme.layout.maxWidth} - 10rem) / 4 - 2rem);
        transform : scale(1.0);
        transition : .3s ease-out;
      }

      :hover img {
        transform: scale(1.1);
      }
    }

    + a {
      margin-left : 1rem;
    }

    /* club name area */
    h4 {
      margin-top: 1.2rem;
      font-weight : 500;
      letter-spacing : -0.04rem;
    }
  }

  a:is(:link, :hover, :focus, :active) {
    text-decoration: none;
  }
`;
