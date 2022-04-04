import styled from 'styled-components';

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 242px;
  .title {
    width: 218px;
    height: 36px;
    margin-bottom: 16px;
  }
  span {
    width: 292px;
    text-align: left;
    font: normal normal normal 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #a19279;
    opacity: 1;
  }
  a {
    margin-top: 16px;
    span {
      font: normal normal normal 18px/24px Noto Sans KR;
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
  margin-top: 60px;
  height: 360px;
  div {
    width: 304px;
    height: 250px;
    margin-right: 24px;
    box-shadow: 2px 2px 6px var(---grey1-3);
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 6px #dddae0;
    border-radius: 5px;
    opacity: 1;
    img {
      width: 304px;
      height: 250px;
    }
  }
  div:first-child {
    width: 386px;
    height: 300px;
    box-shadow: 3px 3px 10px var(---grey1-3);
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 10px #dddae0;
    border-radius: 5px;
    opacity: 1;
    img {
      width: 386px;
      height: 300px;
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
    border-radius: 20px;
    opacity: 1;
  }
`;
