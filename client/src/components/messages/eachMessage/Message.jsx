import './eachMessage.css'
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {

    let isSendByCurrentUser = false;

    const trimmedName = (name || '').trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    };

    return (
        isSendByCurrentUser
            ? (
                <div className='messageContainer justifyEnd'>
                    <p className='sendText pr-10'>
                        {trimmedName}
                    </p>
                    <div className="messageBox backgroundBlue">
                        <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className='messageContainer justifyStart'>
                    <div className="messageBox backgroundReceived">
                        <p className='messageText colorReceivedText'>{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className='sendText pl-10'>
                        {user}
                    </p>
                </div>
            )
    )
};

export default Message;