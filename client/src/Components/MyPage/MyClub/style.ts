import styled from 'styled-components';

export const ClubContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
  height: 1075px;
  background: #703ee0 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #00000029;
  border-radius: 5px;
  opacity: 1;
  display: flex;
`;

export const ClubNavigator = styled.div`
  width: 164px;
  height: 1075px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  & > div:first-child {
    margin-top: 24px;
  }
`;

export const ClubListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  width: 796px;
  height: 1075px;
  background: #d4bce980 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #00000029;
  border-radius: 5px;
  opacity: 1;
  & > a {
    div {
      display: flex;
      flex-direction: column;
      margin-right: 24px;
      margin-top: 50px;
      img {
        width: 304px;
        height: 250px;
        margin-bottom: 20px;
      }
    }
    span {
      font: normal normal bold 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #ffffff;
      opacity: 1;
    }
    margin-bottom: 50px;
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
