import io from 'socket.io-client';

export default io('localhost:3001', { reconnection: true });
