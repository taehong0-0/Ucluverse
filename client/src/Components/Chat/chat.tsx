import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../Recoil/User';
import socket from '../../Util/helpers/socket';
import { ChatContainer, ChatTitle, ChatLog } from './style';

function Chat(socketId: any) {
  const user = useRecoilValue(userDataState);
  // const [receivedChatData, setReceivedChatData] = useState({ socketId: '', message: '' });
  const [chatHtml, setChatHtml] = useState('');

  useEffect((): any => {
    socket.on('RECEIVE_MESSAGE', (chatData: any) => {
      // setReceivedChatData(chatData);
      setChatHtml(
        (prev) =>
          `${prev}<p class="Nickname">${chatData.userName}</p> <p class="Content">${chatData.message}<p>`,
      );
    });
    return () => socket.off('RECEIVE_MESSAGE');
  });

  // useEffect(() => {}, [receivedChatData]);

  useEffect(() => {
    const autoScroll = document.querySelector('.chatStyle');
    if (autoScroll) autoScroll.scrollTop = autoScroll.scrollHeight;
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = e.target[0].value;
    if (message.length > 0) {
      e.target[0].value = '';
      socket.emit('SEND_MESSAGE', {
        socketId: socketId.socketId,
        userName: user.user.name,
        message,
      });
    }
  };

  return (
    <ChatContainer>
      <ChatTitle>
        <h2>Chat</h2>
      </ChatTitle>
      <ChatLog>
        <div className="chatStyle" dangerouslySetInnerHTML={{ __html: chatHtml }} />
      </ChatLog>
      <form onSubmit={handleSubmit}>
        <input placeholder="Insert whatever" />
      </form>
    </ChatContainer>
  );
}

export default Chat;
