import styled from 'styled-components';

export const ClubContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 130px;
    z-index: 1;

  article {
    display : flex;
    flex-direction: column;
    margin-left: 15.125rem;
  }

    .title {
      width: 13.625rem;
      height: 2.25rem;
      margin-bottom: 1rem;
    }
    span {
      width: 22rem;
      text-align: left;
      font: normal normal normal 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
    }
    a {
        margin-top: 1rem;
        span {
          font: normal normal normal 18px/1.5rem Noto Sans KR;
          letter-spacing: -1.35px;
          color: #513c0e;
          opacity: 1;
        }
    }
  
  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
  }
`;

export const ImgContainer = styled.div`
  width: 83.3vw;
  overflow: scroll;
  margin-top: 3.75rem;
  margin-left: 15.125rem;
  height: 22.5rem;
  .overflow-container {
    display: inline-flex;
    /* width: 150rem; */
    align-items: baseline;
    & > div {
      display: inline-block;
      cursor: pointer;
      width: 19rem;
      height: 15.625rem;
      margin-right: 1.5rem;
      overflow: hidden;
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 2px 2px 6px #dddae0;
      border-radius: 5px;
      opacity: 1;
      img {
        transition: all 0.2s linear;
        width: 19rem;
        height: 15.625rem;
      }
      button {
        opacity: 0;
        cursor: pointer;
        transition: all 0.2s linear;
        z-index: 999;
        position: relative;
        left: 16.5rem;
        top: -46px;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 100% 0% 0% 0%;
        background: transparent linear-gradient(180deg, #63239b 0%, #9239df 100%) 0% 0% no-repeat padding-box;
        box-shadow: 1px 1px 4px #a45de2;
        background-color: black;
        span {
          display: block;
          color: #fff;
          margin-left: 10px;
          margin-top: 10px;
          font-size: 24px;
        }
      }
    }
    div:hover {
      img {
        transform: scale(1.1);
      }
      button {
        opacity: 1;
      }
    }
    div:first-child {
      width: 24.125rem;
      height: 18.75rem;
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px .625rem var(--shadow-purple-0);
      border-radius: 5px;
      opacity: 1;
      button {
        left: 21.7rem;
      }
      img {
        width: 24.125rem;
        height: 18.75rem;
      }
    }
  }
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    width: 3px;
    height: 3px;
    background: #6d00b9 0% 0% no-repeat padding-box;
    border-radius: 1.25rem;
    opacity: 1;
  }
`;
