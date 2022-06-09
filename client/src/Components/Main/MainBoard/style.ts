import styled from 'styled-components';

export const MainBoardDiv = styled.article`
  width : calc(50% - 1.5rem - (${(props) => props.theme.layout.gutter} / 2));
  height: 12rem;
  background: white;
  box-shadow: 3px 3px 0.625rem var(--shadow-purple-0);
  padding-left: 1.5rem;
  padding-top: 1.563rem;


  img {
    height: 18px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    span {
      font: normal normal normal 0.875rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #1a1917;
      opacity: 1;
    }
    a:is(:link, :visited, :hover, :active) {
      text-decoration: none;
    }
    a {
      height: 1.25rem;
    }
    a:nth-child(n+2) {
        padding-top: 6px;
      }
  }

  @media (max-width: 768px) {
    width : calc(90vw - 1.5rem);
    margin : 1rem auto;
  }
`;

export const MainBoardContainerDiv = styled.section`
  width: 90vw;
  margin : 0 auto;

  section {
    display: flex;
    justify-content : space-between;
    width : 100%;
    max-width : ${(props) => props.theme.layout.maxWidth};
    margin: 8rem auto;
  }

  @media (max-width: 768px) {
      width : 100%;
      margin-top : -10rem;

      section {
        flex-direction: column;
      }
  }
`;
