import styled from 'styled-components';

export const AdminNavigationContainer = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid #bfbfbf;
  opacity: 1;
  margin-bottom: 50px;
  & > span:first-child {
    margin-left: 160px;
  }
  & > span {
    cursor: pointer;
    display: inline-block;
    height: 32px;
    line-height: 45px;
    padding-top: 13px;
    padding-left: 14px;
    padding-right: 14px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 2px #00000029;
    opacity: 1;
    font: normal normal bold 14px/20px Noto Sans KR;
  }
  .selected {
    color: #9239df;
  }
`;
