import { useEffect, useRef, useState } from 'react';

import socket from '../../Util/socket';
import Background from '../../Components/Background/background';
import Character from '../../Components/Character/character';
import defaultMapSetting from '../../libs/defaultMapSetting';
import keyboardEvent from '../../libs/keyboardEvent';
import Chat from '../../Components/Chat/chat';
import { MetaverseContainer } from './style';

const Metaverse = () => {
  const [users, setUsers] = useState<any>({});
  const socketId = socket.id;
  const [user, setUser] = useState<any>({
    name: '',
    x: 1800,
    y: 1800,
    direction: 'down',
    state: 'mid',
  });
  const defaultCharacterPosition = defaultMapSetting[0].character;
  const defaultBackgroundPosition = defaultMapSetting[0].background;

  const left = defaultBackgroundPosition.left + defaultCharacterPosition.x - user.x;
  const top = defaultBackgroundPosition.top + defaultCharacterPosition.y - user.y;

  const [move, setMove] = useState<any>(false);
  const [marginBackground, setMarginBackground] = useState<any>({ top, left });
  const [tempBackground, setTempBackground] = useState<any>({ top, left });
  const [background, setBackground] = useState<any>({ top, left });
  const [chatData, setChatData] = useState<any>({ socketId: '', message: '' });

  useEffect(() => {
    const handleMove = document;

    socket.emit('JOIN_ROOM', { id: socket.id, cId: 0 }, (userData: any) => setUser(userData));
    socket.on('makeRoomClient', (RoomUser: any) => setUsers(RoomUser));

    handleMove.addEventListener('keydown', (event) => {
      if (Object.keys(keyboardEvent).includes(event.code)) {
        setTempBackground((v: any) => {
          return keyboardEvent[event.code].background(v);
        });
        setUser((v: any) => keyboardEvent[event.code].character(v));
      }
    });

    handleMove.addEventListener('keyup', () => setUser((v: any) => ({ ...v, state: 'mid' })));

    socket.on('changeMove', (list: any, temp: any) => {
      setUsers(list);
      if (temp !== null)
        (function () {
          setBackground((v: any) => temp ?? v);
          setMove(false);
        })();
      else setMove(true);
    });
  }, []);

  useEffect(() => {
    socket.emit('CHARACTER_MOVE', { user, tempBackground });
  }, [user]);

  useEffect(() => {
    if (tempBackground.top === background.top && tempBackground.left === background.left)
      setMarginBackground((v: any) => ({ top: background.top, left: background.left }));
  }, [background, tempBackground]);

  return (
    <MetaverseContainer>
      <Chat socketId={socketId} />
      <Background marginBackground={marginBackground} />
      <Character socketId={socketId} users={users} marginBackground={marginBackground} move={move} />
    </MetaverseContainer>
  );
};

export default Metaverse;
