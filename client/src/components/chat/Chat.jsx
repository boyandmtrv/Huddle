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

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports : ['websocket'] });

        setName(name);
        setRoom(room);

        console.log(socket);
    }, [ENDPOINT, location.search]);

    return (
        <h1>Chat</h1>
    )
};

export default Chat;