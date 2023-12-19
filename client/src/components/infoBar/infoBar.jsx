import { useState } from "react";
import { Link } from "react-router-dom";

import closeIcon from '../../../public/icons/closeIcon.svg';
import onlineIcon from '../../../public/icons/onlineIcon.svg';

const InfoBar = ({
    room
}) => {

    return (
        <div className="infoBar">
            <div className="leftContainer">
                <img
                    className="onlineIcon"
                    src={onlineIcon}
                    alt="online"
                />
                <h3>{room}</h3>
            </div>
            <div className="rightContainer">
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