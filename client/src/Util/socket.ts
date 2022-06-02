import io from 'socket.io-client';

export default io('54.180.14.220:3001', { reconnection: true });
