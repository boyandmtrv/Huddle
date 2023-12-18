import { useState } from "react";
import { Link } from "react-router-dom";
import './join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    const onChangeNameInput = (e) => {
        setName(e.target.value)
    };

    const onChangeRoomInput = (e) => {
        setRoom(e.target.value)
    };

    const handleClick = ({ name, room }) => {
        if (!name || !room) {
            e.preventDefault();
        } else {
            return null;
        }
    };


    return (
        <div className="outer">
            <div className="inner">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        type="text"
                        className="join"
                        placeholder="Name"
                        onChange={onChangeNameInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="room"
                        placeholder="Room"
                        onChange={onChangeRoomInput}
                    />
                </div>
                <Link
                    onClick={handleClick}

                    to={`/chat?name=${name}&room=${room}`}>
                    <button
                        className="button"
                        type="submit"
                    >Join</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;