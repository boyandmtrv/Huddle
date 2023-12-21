import { useState } from "react";
import { Link } from "react-router-dom";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onChangeNameInput = (e) => {
        setName(e.target.value);
    };

    const onChangeRoomInput = (e) => {
        setRoom(e.target.value);
    };

    const onClickChatJoin = (e) => {
        try {
            if (!name) {
                e.preventDefault();
                console.log('Name is required!');
                toast.error('Name is required!');
                return;
            }

            if (!room) {
                e.preventDefault();
                console.log('Room name / id is required!');
                toast.error('Room name / id is required!');
                return;
            }

            if (name.length < 3) {
                e.preventDefault();
                console.log('Name must be at least 3 characters long!');
                toast.error('Name must be at least 3 characters long!');
                return;
            }

            if (room.length < 5) {
                e.preventDefault();
                console.log('Room name / id must be at least 5 characters long!');
                toast.error('Room name / id must be at least 5 characters long!');
                return;
            }

            return null;
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="outer flex lg:flex-row md:flex-row h-screen lg:w-full min-[320px]:flex-col items-center justify-center  relative bg-zinc-950">

            <div className="welcome absolute top-[13%] left-5 ml-4 text-gray-400 lg:text-[90px] min-[826px]:text-[80px] min-[769px]:text-[80px]  min-[477px]:text-[50px] min-[320px]:text-[40px] text-[#b8b8b852]">
                Welcome to
            </div>
            <div className="inner backdrop-blur-md bg-[#f0c1950a] bg-opacity-10  bg-clip-padding backdrop-filter border-2 border-[#f0c19557] lg:w-[28%] lg:h-[50%] md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64 ">
                <h1 className="heading text-2xl lg:text-5xl min-[320px]:text-3xl mb-4 text-gray-300">Join a chat</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="join py-2 px-4 rounded-md text-xl bg-transparent border-2 border-zinc-900 text-white"
                        placeholder="Enter your Name"
                        onChange={onChangeNameInput}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="room py-2 px-4 rounded-md text-xl bg-transparent border-2 border-zinc-900 text-white"
                        placeholder="Room Id / Room name"
                        onChange={onChangeRoomInput}
                    />
                </div>
                <Link
                    onClick={onClickChatJoin}
                    to={`/chat?name=${name}&room=${room}`}
                    target="_blank" rel="noopener noreferrer"
                >
                    <button className="button mt-4 text-white text-xl bg-zinc-900 w-24 h-[40px] rounded-3xl border border-white hover:bg-[#f0c195f6] hover:text-black hover:border-black transition ease-in-out" type="submit">
                        Join
                    </button>
                </Link>
            </div>
            <div className="inner bg-[#ffffff13] backdrop-blur-md bg-opacity-10  bg-clip-padding backdrop-filter 
              border-2 border-[#ffffff52] lg:w-[28%] lg:h-[50%] md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64 lg:ml-5 ">
                <h1 className="heading text-2xl lg:text-5xl mb-4 text-[#f0c195f6] min-[320px]:text-3xl ">Create a chat</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="join py-2 px-4 rounded-md text-xl bg-transparent border-2 border-zinc-900 text-white"
                        placeholder="Enter your Name"
                        onChange={onChangeNameInput}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="room py-2 px-4 rounded-md text-xl bg-transparent border-2 border-zinc-900 text-white"
                        placeholder="Room Id / Room name"
                        onChange={onChangeRoomInput}
                    />
                </div>
                <Link
                    onClick={onClickChatJoin}
                    to={`/chat?name=${name}&room=${room}`}
                    target="_blank" rel="noopener noreferrer"
                >
                    <button className="button mt-4 text-white text-xl bg-zinc-900 w-24 h-[40px] rounded-3xl border border-white hover:bg-white hover:text-black hover:border-black transition ease-in-out" type="submit">
                        Create
                    </button>
                </Link>
            </div>
            <div style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px' }} className="absolute bottom-1 left-0 ml-4 lg:text-[300px] z-0 min-[826px]:text-[230px] min-[769px]:text-[220px]  min-[477px]:text-[140px] min-[320px]:text-[100px] -webkit-text-stroke: 2px teal text-[#b8b8b852]">
                Huddle.
            </div>
            <div className="absolute lg:right-5 lg:top-[45%] mr-4 text-white text-2xl flex lg:flex-col lg:items-end  md:right-0 md:flex-row md:items-start sm:flex-row sm:items-start md:bottom-0 sm:right-5 sm:bottom-5 min-[320px]:flex-row min-[320px]:left-5 min-[320px]:top-10">
                <a href="https://github.com/boyandmtrv/" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="lg:mb-10 min-[320px]:mb-0 min-[320px]:ml-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/boyan-dimitrov-4402b4179/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="lg:mb-10 min-[320px]:mb-0 min-[320px]:ml-10 text-white" />
                </a>
            </div>
            <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
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

export default Join;
