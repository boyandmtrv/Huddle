import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    const onChangeNameInput = (e) => {
        setName(e.target.value)
    };

    const onChangeRoomInput = (e) => {
        setRoom(e.target.value)
    };

    const onClickChatJoin = (e) => {
        try {
            if (!name || !room) {
                e.preventDefault();
                throw new Error('Both name and room are required!');
            };

            if (name.length < 3) {
                e.preventDefault();
                throw new Error('Name must be at least 3 characters long!');
            };

            return null;

        } catch (err) {
            console.log(err.message);
        };
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
                    // onClick={e => (!name || !room) ? e.preventDefault() : null}
                    onClick={onClickChatJoin}

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