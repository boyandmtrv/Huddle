import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ENDPOINT } from "../../utils/const";

import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from "../infoBar/infoBar";
import Input from "../input/Input";
import Messages from "../messages/Messages";

import './chat.css'

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
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;