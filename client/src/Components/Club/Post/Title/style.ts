import styled from 'styled-components';

export const MainContainer = styled.div``;
export const TitleContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  & > div {
    span {
      display: inline-block;
      text-align: left;
      letter-spacing: -1.35px;
      opacity: 1;
      vertical-align: middle;
    }
    & > span:nth-of-type(2) {
      width: 15%;
    }
  }
  & + & {
    border: none;
  }
  .notice {
    width: 100%;
    background: #f7f4fb 0% 0% no-repeat padding-box;
    border: 1px solid #dddae0;
    border-width: 1px 0px 1px 0px;
    span {
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #e86c6c;
    }
    & > span:first-child {
      padding-top: 0.625rem;
      width: 5%;
      height: 2.125rem;
      margin-right: 1.25rem;
      line-height: 2.75rem;
      text-align: center;
      background: #e86c6c 0% 0%;
      border: 1px solid #dddae0;
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #ffffff;
      opacity: 1;
    }
    a {
      width: 65%;
    }
  }
  .post {
    width: 100%;
    height: 2.75rem;
    vertical-align: middle;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddae0;
    border-width: 1px 0px 1px 0px;
    opacity: 1;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      font: normal normal normal 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      color: #1a1917;
      opacity: 1;
    }
    & > span:first-child {
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
      margin-left: 0.625rem;
      margin-right: 0.625rem;
      opacity: 1;
    }
    a {
      width: 65%;
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
