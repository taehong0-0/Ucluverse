import styled from 'styled-components';
import { BoardStyle } from '../style';

export const AwardBoardContainer = styled.div`
  & > div:first-child {
    ${BoardStyle}
  }
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
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 10rem;
    left: 25rem;
    width: 680px;
    height: 500px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 10px #00000029;
    border-radius: 5px;
    opacity: 1;
    text-align: center;
    & > span:first-child {
      display: block;
      font: normal normal bold 24px/28px Noto Sans KR;
      letter-spacing: -1.8px;
      color: #0e0e0e;
      opacity: 1;
      margin-top: 40px;
    }
    & > div:first-of-type {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      & > div:first-child {
        width: 16.5rem;
        margin-right: 24px;
        text-align: left;

        & > div {
          margin-bottom: 18px;
        }
        span {
          font: normal normal bold 18px/24px Noto Sans KR;
          letter-spacing: -1.35px;
          color: #1a1917;
          opacity: 1;
        }
      }
      & > div:last-of-type {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 16.5rem;
        span {
          font: normal normal bold 18px/24px Noto Sans KR;
          letter-spacing: -1.35px;
          color: #1a1917;
          opacity: 1;
          margin-bottom: 30px;
        }
        textarea {
          height: 17rem;
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 1px 1px 4px #00000029;
          border-radius: 5px;
          opacity: 1;
          border: none;
          resize: none;
        }
      }
    }
    & > div:last-of-type {
      display: flex;
      margin-top: 23px;
      button:last-of-type {
        margin-left: 36px;
        width: 3.75rem;
        height: 2.125rem;
        /* UI Properties */
        background: #ffffff;
        opacity: 1;
        border: none;
        cursor: pointer;
        span {
          font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
          letter-spacing: -1.05px;
          color: #a6a096;
          opacity: 1;
        }
      }
    }
  }
  & > button {
    margin-top: 1.25rem;
    margin-left: 48rem;
  }
`;
export const DropZoneDiv = styled.div`
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
`;
export const AwardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  height: 33.5rem;
  & > div {
    width: 40rem;
    margin-left: 54px;
    margin-top: 25px;
    display: flex;
    img {
      width: 222px;
      height: 200px;
      /* UI Properties */
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 3px 3px 10px #211f1f;
      border-radius: 5px;
      opacity: 1;
    }
    div {
      margin-left: 40px;
      span:first-child {
        text-align: left;
        font: normal normal bold 24px/28px Noto Sans KR;
        letter-spacing: -1.8px;
        color: #0e0e0e;
        opacity: 1;
      }
      span:last-child {
        display: block;
        margin-top: 10px;
        text-align: left;
        font: normal normal normal 14px/20px Noto Sans KR;
        letter-spacing: -1.05px;
        color: #1a1917;
        opacity: 1;
      }
    }
  }
`;
