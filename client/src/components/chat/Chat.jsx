import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ENDPOINT } from "../../utils/const";

import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {

    const location = useLocation();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: ['websocket'] });

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        };

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const onMessageSend = (e) => {
        setMessage(e.target.value)
    };

    const onLetterTyped = (e) => {
        if (e.key === 'Enter') {
            sendMessage(e);
        } else {
            return null;
        };
    };

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        };
    };

    console.log(message, messages);

    return (
        <div className="outer">
            <div className="container">
                <h1>Chat</h1>
                <input
                    type="text"
                    value={message}
                    onChange={onMessageSend}
                    onKeyPress={onLetterTyped}
                />
            </div>
        </div>
    );
};

export default Chat;