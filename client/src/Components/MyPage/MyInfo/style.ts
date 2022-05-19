import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 730px;
  /* UI Properties */
  opacity: 1;
  & > img {
    z-index: 1;
    width: 100%;
    position: absolute;
  }
`;

export const InfoDetail = styled.div`
  z-index: 10;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  & > span:first-child {
    text-decoration: underline;
    font: normal normal bold 48px/56px Noto Sans KR;
    letter-spacing: -3.6px;
    color: #ffffff;
    opacity: 1;
  }
  & > div {
    width: 300px;
    margin-bottom: 12px;
    span:first-child {
      display: inline-block;
      width: 83px;
      margin-right: 24px;
      text-align: right;
      font: normal normal bold 24px/28px Noto Sans KR;
      letter-spacing: -1.8px;
      color: #ffffff;
      opacity: 1;
    }
    span:last-child {
      text-align: left;
      font: normal normal normal 24px/28px Noto Sans KR;
      letter-spacing: -1.8px;
      color: #ffffff;
      opacity: 1;
    }
  }
  & > div:first-child {
    margin-top: 100px;
    margin-bottom: 25px;
    span:first-child {
      display: inline-block;
      width: 500px;
      font: normal normal bold 48px/56px Noto Sans KR;
      letter-spacing: -3.6px;
      color: #ffffff;
      opacity: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span:last-child {
      display: inline-block;
      font: normal normal bold 48px/56px Noto Sans KR;
      letter-spacing: -3.6px;
      color: #ffffff;
      opacity: 1;
    }
  }
`;
export const InfoRightContainer = styled.div`
  width: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageDetail = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 60px;
  & > div {
    width: 175px;
    height: 225px;
    /* UI Properties */
    background: #d4bce9 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 10px #00000029;
    border-radius: 5px;
    opacity: 1;
  }
  & > div:first-child {
    margin-right: 18px;
  }
`;

export const InfoButtonContainer = styled.div``;
