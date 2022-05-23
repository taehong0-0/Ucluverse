import styled from 'styled-components';

export const AdminMemberContainer = styled.div`
  width: 480px;
  margin-left: 160px;
  opacity: 1;
  & > span {
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: #1a1917;
    opacity: 1;
  }
  & > div:first-of-type {
    margin-top: 12px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 27px;
    line-height: 27px;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    opacity: 1;
    span {
      display: inline-block;
      width: 100px;
      font: normal normal bold 12px/16px Noto Sans KR;
      letter-spacing: -0.6px;
      color: #0e0e0e;
      opacity: 1;
    }
  }
  & > button {
    margin-top: 16px;
    margin-left: 210px;
    margin-bottom: 111px;
  }
`;
export const MemberBodyContainer = styled.div`
  border-bottom: 2px solid #707070;
  height: 455px;
  overflow: auto;
  margin-bottom: 90px;
  & > div {
    display: flex;
    width: 480px;
    height: 49px;
    align-items: center;
    & > span {
      width: 100px;
    }
    div:first-child {
      width: 100px;
      select {
        -webkit-appearance: none; /* for chrome */
      }

      select::-ms-expand {
        display: none; /*for IE10,11*/
      }
      select.manager {
        display: inline-block;
        width: 46px;
        height: 19px;
        background: #4e4e4e 0% 0% no-repeat padding-box;
        box-shadow: 2px 2px 6px #00000029;
        border-radius: 5px;
        opacity: 1;
        text-align: center;
        font: normal normal normal 12px/20px Noto Sans KR;
        letter-spacing: -0.9px;
        color: #ffffff;
      }
      select.member {
        display: inline-block;
        width: 46px;
        height: 19px;
        /* UI Properties */
        background: #f5f5f5 0% 0% no-repeat padding-box;
        box-shadow: 2px 2px 6px #00000029;
        border-radius: 5px;
        opacity: 1;
        text-align: center;
        font: normal normal normal 12px/20px Noto Sans KR;
        letter-spacing: -0.9px;
        color: #4e4e4e;
      }
    }
  }
`;
