import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ENDPOINT } from "../../utils/const";

import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from "../infoBar/infoBar";
import Input from "../input/Input";
import Messages from "../messages/Messages";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success('Welcome')

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
        <div className="flex flex-col h-screen bg-zinc-950">
            <div className="container mx-auto h-full flex flex-col bg-zinc-900 border-2 border-[#f0c19557] backdrop-blur-lg">
                <div className="absolute left-[-260px] top-1/2 transform -translate-y-1/2 p-4 ">
                    <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '1px' }} className="text-white text-[200px] ">huddle</p>
                </div>

                {/* Rest of your components */}
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </div>
    );

};

export default Chat;