const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js')

const router = require('./router.js');

const PORT = 5000;
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return callback(error)
        };

        socket.emit('message', {
            user: 'admin',
            text: `${user.name}, welcome to the room: ${user.room}. You can use the room id / name, send it to a friend and chat with them.`
        });

        socket.broadcast.to(user.room).emit('message', {
            user: 'admin',
            text: `${user.name} has joined the chat.`
        });

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        });

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`})  
        };
    });
});

app.use(router);

server.listen(PORT, () => console.log('Server is listening on port ' + PORT));

