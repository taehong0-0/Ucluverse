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
    img {
      width: 30vw;
    }
    img:last-child {
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
  input {
    width: 33vw;
    height: 45px;
    border: none;
  }
  button {
    width: 5vw;
  }
  input::placeholder {
    padding-left: 10px;
    margin-left: 30px;
  }
`;
