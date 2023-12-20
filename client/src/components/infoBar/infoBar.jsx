import './infoBar.css';

import closeIcon from '../../../public/icons/closeIcon.svg';
import onlineIcon from '../../../public/icons/onlineIcon.svg';

const InfoBar = ({
    room
}) => {

    return (
        <div className="infoBar">
            <div className="leftContainer">
                <img
                    className="online"
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
                        className='close'
                    />
                </a>
            </div>

        </div>
    )
};

export default InfoBar;