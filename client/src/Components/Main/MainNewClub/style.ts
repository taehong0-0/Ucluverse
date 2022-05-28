import styled from 'styled-components';

export const NewClubContainer = styled.section`
  display: flex;
  width: calc(${(props) => props.theme.layout.maxWidth});
  max-width : calc(${(props) => props.theme.layout.maxWidth});
  height: 21.875rem;
  margin-top: -3.5rem;
  margin : 0 auto;

  & > article:first-child {
    margin-top: -5rem;
    width: 19rem;
    height: 21.875rem;
    overflow: hidden;
    z-index : 1;
    box-shadow: 0px 10px .625rem var(--shadow-purple-0);
    
    .club-img {
      width: 19rem;
      height: 21.875rem;
      box-shadow: 3px 3px 0.625rem var(--grey1-3);
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 3px 3px 0.625rem #dddae0;
      border-radius: 5px;
      opacity: 1;
      transition: all 0.2s linear;
    }

    article {
      z-index: 1;
      position: relative;
      width: 19rem;
      height: 5rem;
      background-color: #fff;
      top: -180px;
      left: -110px;
      opacity: 0;
      transition: all 0.2s linear;

      h3 {
        display: block;
        margin-left: 1.25rem;
        margin-top: 1.25rem;
        color: #6d00b9;
      }
    }

    button {
      opacity: 0;
      cursor: pointer;
      transition: all 0.2s linear;
      z-index: 999;
      position: relative;
      float : right;
      top: -3rem;
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      border-radius: 100% 0% 0% 0%;
      background: transparent linear-gradient(180deg, #63239b 0%, #9239df 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 1px 1px 4px #a45de2;
      background-color: black;

      span {
        display: block;
        color: white;
        margin : .6rem 0 0 .6rem;
        font-size: 1.5rem;
      }
    }
  }
  article:first-child:hover {
    .club-img {
      transform: scale(1.1);
    }
    article {
      opacity: 1;
    }
    button {
      opacity: 1;
    }
  }
  article:last-child {
    display: flex;
    flex-direction: column;
    margin-top: 3.75rem;
    margin-left: 6.625rem;
    z-index : 1;
    img {
      width: 9.563rem;
      height: 2.25rem;
      margin-bottom: 1rem;
    }
    h4 {
      width: 20rem;
      text-align: left;
      color: var(--paragraph-0);
    }
    a {
      margin-top: 1rem;

      h4 {
        color: var(--secondary-d1);
        opacity: 1;
      }
    }
  }
  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
  }

  /* for mobiles */
  @media (max-width: 768px) {
    display : flex;
    flex-direction: column;
    margin-left : 0;
    margin-bottom : 20rem;

    article {
      left : 0;
      top : 0;
      width : 100vw;
    }

    & > article:first-child {
      width : 88vw;
      margin-left : 4vw;

      .club-img {
          width : 90vw;
      }

      button {
        top : -9.6rem;
      }
    }

    & > article:last-child {
      margin-top : 3rem;
      margin-left : 0;
      justify-content: center;
      vertical-align: middle;
      align-items: center;
      
      h4 {
        text-align : center;
      }
    }
  }
`;
