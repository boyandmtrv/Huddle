const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const PORT = 5000;
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection.');

    socket.on('disconnect', () => {
        console.log('User have left the chat.');
    })
});

app.use(router);

server.listen(PORT, () => console.log('Server is listening on port ' + PORT));