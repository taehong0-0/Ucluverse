import styled from 'styled-components';

export const ChatContainer = styled.section`
// Container
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  font-family : Noto Sans KR;
  width: 350px;
  height: 100vh;
  left: calc(100vw - 350px);
  top: 0px;
  background-color: #2d1646;

  // 입력
  form {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    input {
      background-color: #4a385a;
      border: none;
      border-radius: 5px;
      color: #eee;

      font-size: 1rem;
      width: 100%;
      margin: 0 2px;
      padding: 1.1rem 1rem;

      &:focus {
        border: none;
        outline: 2px solid rgba(202, 216, 255, 0.6);
      }
    }
  }
`;


// Title
export const ChatTitle = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 1rem;
  color: #ddd;

  h2 {
    color : var(--grey2-1);
  }
`;

//채팅 log Container
export const ChatLog = styled.div`
  margin-top: 1rem;
  height: 70%;
  border-radius: 5px;

  // 채팅 log
.chatStyle {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  background-color: #250f39;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: scroll;

  // 스크롤바
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2c76f;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  // 글자 기본값
  p {
    &:first-child {
      padding-top: 1rem;
    }

    padding: 0;
    font-size: 1rem;
    font-weight: normal;
    color: #eee;
  }

  // 닉네임
  .Nickname {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 1rem 0.2rem;
    color: #e7d8b4;
  }

  // 채팅 내용
  .Content {
    font-weight: 300;
    padding-top: 0;
    padding: 0 1rem 0.5rem;
  }
}
`