import { useState } from "react";
import { Link } from "react-router-dom";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";


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
            if (!name || !room) {
                e.preventDefault();
                throw new Error('Both name and room are required!');
            }

            if (name.length < 3) {
                e.preventDefault();
                throw new Error('Name must be at least 3 characters long!');
            }

            return null;
        } catch (err) {
            console.log(err.message);
        }
    };
    // bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950
    return (
        <div className="outer flex lg:flex-row md:flex-row h-screen lg:w-full min-[320px]:flex-col items-center justify-center  relative bg-zinc-950">
            <Link to="#" className="absolute top-7 right-7  text-white hover:bg-white hover:text-black hover:border-black transition ease-in-out flex items-center text-xl border-2 border-[#f0c195f6] rounded-3xl p-2">
                Learn more
                <IoInformation className="ml-1" />
            </Link>
            <div style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px' }} className="welcome absolute top-[13%] left-5 ml-4 text-gray-500 lg:text-[90px] min-[826px]:text-[80px] min-[769px]:text-[80px]  min-[477px]:text-[50px] min-[320px]:text-[40px] text-[#b8b8b852]">
                Welcome to
            </div>
            <div className="inner backdrop-blur-md bg-[#f0c1950a] bg-opacity-10  bg-clip-padding backdrop-filter border-2 border-[#f0c19557] lg:w-[28%] lg:h-[50%] md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64">
                <h1 className="heading text-2xl lg:text-5xl mb-4 text-gray-300">Join a chat</h1>
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
                >
                    <button className="button mt-4 text-white text-xl bg-zinc-900 w-24 h-[40px] rounded-3xl border border-white hover:bg-[#f0c195f6] hover:text-black hover:border-black transition ease-in-out" type="submit">
                        Join
                    </button>
                </Link>
            </div>
            <div className="inner bg-[#ffffff13] backdrop-blur-md bg-opacity-10  bg-clip-padding backdrop-filter 
              border-2 border-[#ffffff52] lg:w-[28%] lg:h-[50%] md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64 lg:ml-5 ">
                <h1 className="heading text-2xl lg:text-5xl mb-4 text-[#f0c195f6]">Create a chat</h1>
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
                <FiGithub className="lg:mb-10 min-[320px]:mb-0 min-[320px]:ml-5 text-white" />
                <FiLinkedin className="lg:mb-10 min-[320px]:mb-0 min-[320px]:ml-10 text-white" />
            </div>
        </div>
    );
};

export default Join;
