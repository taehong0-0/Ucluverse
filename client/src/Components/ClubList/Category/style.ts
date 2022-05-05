import styled from 'styled-components';

export const ClubCategoryContainer = styled.div`
  width: 70rem;
  margin-top: 16px;
  /* overflow: hidden; */
  & > span {
    display: block;
    font-size: 32px;
    letter-spacing: -1.56px;
    color: #ffffff;
    opacity: 1;
  }
  & > div {
    margin-top: 11px;
    margin-bottom: 16px;
    display: flex;
    height: 42px;
    overflow: scroll;
    div {
      cursor: pointer;
      display: inline-block;
      line-height: 42px;
      padding-left: 28px;
      padding-right: 28px;
      height: 42px;
      margin-right: 10px;
      background: #303030 0% 0% no-repeat padding-box;
      box-shadow: 2px 2px 6px #00000029;
      border-radius: 5px;
      text-align: center;
      span {
        white-space: nowrap;
        display: inline-block;
        color: #ffffff;
        opacity: 1;
      }
    }
    .selected {
      background: #0f0f0f 0% 0% no-repeat padding-box;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
