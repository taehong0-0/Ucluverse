import styled from 'styled-components';

export const AdminMainContainer = styled.div`
  margin-left: 160px;
  width: 480px;
  & > span {
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
    opacity: 1;
  }
  & > button {
    margin-top: 16px;
    margin-left: 210px;
    margin-bottom: 111px;
  }
`;

export const BodyContainer = styled.div`
  margin-top: 12px;
  border-top: 2px solid #707070;
  border-bottom: 2px solid #707070;
  opacity: 1;
  #dropzone {
    width: 16.5rem;
    height: 8.938rem;
    border: 1px dashed var(---grey1-3);
    border: 1px dashed #dddae0;
    border-radius: 5px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    img {
      margin-top: 0.938rem;
    }
  }
  & > div {
    display: flex;
    width: 480px;
    height: 49px;
    align-items: center;
    span:first-child {
      width: 130px;
      font: normal normal bold 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #0e0e0e;
      opacity: 1;
    }
    span:last-child {
      font: normal normal 300 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #0e0e0e;
      opacity: 1;
    }
  }
  .introduce {
    height: 180px;
    align-items: flex-start;
    textarea {
      width: 253px;
      height: 160px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      opacity: 1;
      resize: none;
    }
  }
  .poster {
    height: 9.938rem;
    align-items: flex-start;
  }
`;

export const DropZoneDiv = styled.div``;
