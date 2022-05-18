import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 100%;
  height: 579px;
  /* UI Properties */
  background: transparent linear-gradient(180deg, #a45de2 0%, #9239df 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
`;

export const InfoDetail = styled.div`
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
    margin-top: 55px;
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
export const CharacterDetail = styled.div`
  width: 50%;
  text-align: center;
`;
