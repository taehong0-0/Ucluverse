import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11.9vw;
  width: 17.3vw;
  overflow: hidden;
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
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
      width: 680px;
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      & > div:first-child {
        width: 304px;
        height: 300px;
        text-align: left;
        #notice {
          width: 304px;
          height: 102px;
          /* UI Properties */
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 1px 1px 4px #00000029;
          border-radius: 5px;
          opacity: 1;
          margin-top: 13px;
          margin-bottom: 21px;
          overflow: auto;
          &::-webkit-scrollbar {
            width: 3px;
            background: transparent
              linear-gradient(180deg, #ffffff 0%, #ffffff 100%) 0% 0% no-repeat
              padding-box;
            box-shadow: 1px 1px 4px #00000029;
          }
          &::-webkit-scrollbar-thumb {
            background: #6d00b9 0% 0% no-repeat padding-box;
            border-radius: 1.25rem;
            opacity: 1;
          }
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
        width: 304px;
        height: 300px;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 3px;
          background: transparent
            linear-gradient(180deg, #ffffff 0%, #ffffff 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: 1px 1px 4px #00000029;
        }
        &::-webkit-scrollbar-thumb {
          background: #6d00b9 0% 0% no-repeat padding-box;
          border-radius: 1.25rem;
          opacity: 1;
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
    width: 17.3vw;
    height: 3.313rem;
    /* UI Properties */
    background: var(---secondary-0) 0% 0% no-repeat padding-box;
    background: #846116 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal bold 1.5rem/1.75rem Noto Sans KR;
    color: #ffffff;
    cursor: pointer;
    border: none;
  }
  & > span:nth-of-type(1) {
    margin-left: 0.625rem;
    margin-top: 1rem;
    margin-bottom: 0.875rem;
    vertical-align: middle;
    font: normal normal bold 18px/1.5rem Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
  }
`;

export const BoardContainer = styled.div`
  width: 17.3vw;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffb925;
  border-top: 2px solid #ffb925;
  div {
    margin-left: 0.625rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.625rem;
    padding-bottom: 0.625rem;
    width: 17.3vw;
    & > span {
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #1a1917;
    }
    a {
      margin-left: 1rem;
      .board-name {
        height: 1.375rem;
        font: normal normal 300 18px/1.5rem Noto Sans KR;
        letter-spacing: -1.35px;
        color: #0e0e0e;
      }
    }
  }
  & > div:first-child {
    margin-left: 0px;
    padding-left: 0.625rem;
    border-bottom: 1px solid #a19279;
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
