import styled from 'styled-components';

export const MainHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 68vh;
  align-items: center;
  .background {
    width: 100vw;
    height: 68vh;
  }
  .content {
    img::nth-child(1) {
      width: 30vw;
    }
    img:nth-child(2) {
      margin-top: 25px;
      width: 35vw;
    }
    span {
      top: 235px;
      left: 521px;
      width: 238px;
      height: 26px;
      text-align: center;
      font: normal normal normal 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #a19279;
      opacity: 1;
      margin-top: 15px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -460px;
  }
`;
export const SearchBarDiv = styled.div`
  display: flex;
  width: 36vw;
  height: 45px;
  margin-top: 45px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 10px #dddae0;
  border-radius: 5px;
  opacity: 1;
  overflow: hidden;
  input {
    width: 33vw;
    height: 45px;
    border: none;
    text-indent: 20px;
  }
  input:focus {
    outline: none;
  }
  button {
    cursor: pointer;
    width: 5vw;
    background-color: #a45de2;
    border: none;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
