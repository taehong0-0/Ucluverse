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
  height : 30rem;
  
  background: #d4bce980 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #00000029;

  & > a {
    div {
      display: flex;
      flex-direction: column;
      margin-right: 24px;
      margin-top: 50px;
      img {
        width: 304px;
        height: 30rem;
        margin-bottom: 1.2rem;
      }
    }
    margin-bottom: 4rem;
  }
  a:is(:link, :hover, :focus, :active) {
    text-decoration: none;
  }
`;
