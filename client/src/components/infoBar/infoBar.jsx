import './infoBar.css'

import { useState } from "react";
import { Link } from "react-router-dom";

import closeIcon from '../../../public/icons/closeIcon.svg';
import onlineIcon from '../../../public/icons/onlineIcon.svg';

const InfoBar = ({
    room
}) => {

    return (
        <div className="infoBar flex items-center justify-between bg-blue-500 h-16 w-full">
            <div className="flex items-center flex-1 ml-5 text-white">
                <img
                    className="onlineIcon"
                    src={onlineIcon}
                    alt="online"
                />
                <h3>{room}</h3>
            </div>
            <div className="flex items-center justify-end flex-1 mr-5">
                <a href="/">
                    <img
                        src={closeIcon}
                        alt="close"
                    />
                </a>
            </div>

        </div>
    )
};

export default InfoBar;