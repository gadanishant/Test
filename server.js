import express from 'express';
import initialize from './app/services/app.js';
import { createServer } from 'http';
import { Server as SocketIO } from 'socket.io';

const app = express();
const port = 3000;
const server = createServer(app);
const io = new SocketIO(server);

io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('send_message', (message) => {
      io.emit('receive_message', message);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });  

initialize(app);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});