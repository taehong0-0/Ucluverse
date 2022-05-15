import styled from 'styled-components';

export const AdminEnrollmentListContainer = styled.div`
  & > span {
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
    opacity: 1;
  }
  width: 960px;
  margin-left: 160px;
  & > div:first-of-type {
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 27px;
    line-height: 27px;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    opacity: 1;
    span {
      display: inline-block;
      width: 130px;
      font: normal normal bold 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #0e0e0e;
      opacity: 1;
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
  }
`;
export const AdminEnrollmentFormContainer = styled.div``;

export const ListBodyContainer = styled.div`
  & > div {
    display: flex;
    height: 49px;
    align-items: center;
    & > span {
      display: inline-block;
      width: 130px;
      font: normal normal 300 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #0e0e0e;
      opacity: 1;
    }
    span:last-child {
      cursor: pointer;
    }
    & > div {
      margin-left: auto;
      button:last-of-type {
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
`;
