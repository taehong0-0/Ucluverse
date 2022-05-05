import styled from 'styled-components';

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15.125rem;
  margin-bottom: 130px;
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
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;

export const ImgContainer = styled.div`
  overflow: scroll;
  display: flex;
  align-items: baseline;
  margin-top: 3.75rem;
  height: 22.5rem;
  div {
    width: 19rem;
    height: 15.625rem;
    margin-right: 1.5rem;
    box-shadow: 2px 2px 6px var(---grey1-3);
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 6px #dddae0;
    border-radius: 5px;
    opacity: 1;
    img {
      width: 19rem;
      height: 15.625rem;
    }
  }
  div:first-child {
    width: 24.125rem;
    height: 18.75rem;
    box-shadow: 3px 3px 0.625rem var(---grey1-3);
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 0.625rem #dddae0;
    border-radius: 5px;
    opacity: 1;
    img {
      width: 24.125rem;
      height: 18.75rem;
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
