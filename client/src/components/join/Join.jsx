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

    return (
        <div className="outer flex lg:flex-row md:flex-row h-screen lg:w-full min-[320px]:flex-col items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 relative">
            <div className="inner backdrop-blur-md bg-opacity-10  bg-clip-padding backdrop-filter bg-slate-950 border-2 border-slate-900 lg:w-96 lg:h-96 md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64">
                <h1 className="heading text-2xl lg:text-3xl mb-4 text-white">Join a chat</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="join py-2 px-4 rounded-md text-xl"
                        placeholder="Name"
                        onChange={onChangeNameInput}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="room py-2 px-4 rounded-md text-xl"
                        placeholder="Room"
                        onChange={onChangeRoomInput}
                    />
                </div>
                <Link
                    onClick={onClickChatJoin}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className="button mt-4" type="submit">
                        Join
                    </button>
                </Link>
            </div>

            <div className="inner backdrop-blur-md bg-opacity-10  bg-clip-padding backdrop-filter 
             bg-slate-950 border-2 border-slate-900 lg:w-96 lg:h-96 md:w-96 md:h-96 mt-5 text-center flex flex-col justify-center items-center z-10 min-[320px]:h-64 lg:ml-5">
                <h1 className="heading text-2xl lg:text-3xl mb-4 text-white">Create a chat</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="join py-2 px-4 rounded-md text-xl"
                        placeholder="Name"
                        onChange={onChangeNameInput}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="room py-2 px-4 rounded-md text-xl"
                        placeholder="Room"
                        onChange={onChangeRoomInput}
                    />
                </div>
                <Link
                    onClick={onClickChatJoin}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className="button mt-4" type="submit">
                        Create
                    </button>
                </Link>
            </div>
            <div style={{ color: '#ccc', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px' }} className="absolute bottom-0 left-0 ml-4 text-gray-500 lg:text-[300px] z-0 min-[826px]:text-[250px] min-[769px]:text-[220px]  min-[477px]:text-[140px] min-[320px]:text-[100px] -webkit-text-stroke: 2px teal">
                Huddle
            </div>
            <div className="absolute lg:right-5 lg:top-[45%] mr-4 text-white text-2xl flex lg:flex-col lg:items-end  md:right-0 md:flex-row md:items-start sm:flex-row sm:items-start md:bottom-5 sm:right-5 sm:bottom-5 min-[320px]:flex-row min-[320px]:items-center min-[320px]:top-10">
                <FiGithub className="lg:mb-10 md min-[320px]:mb-0 min-[320px]:ml-5" />
                <FiLinkedin className="lg:mb-10 min-[320px]:mb-0 min-[320px]:ml-10" />
                <IoInformation className="min-[320px]:ml-10" />
            </div>
        </div>
    );
};

export default Join;
