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
                <div className='flex justify-end px-5 mt-8'>
                    <p className='sendText text-white w-96'>
                        {trimmedName}
                    </p>
                    <div className="bg-red-800 rounded-r-3xl rounded-l-3xl p-5 max-w-80">
                        <p className='w-full text-white text-1.1em'>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className='flex justify-end px-5 mt-8'>
                    <div className="bg-red-800 rounded-r-3xl rounded-l-3xl p-5 max-w-80 ">
                        <p className='w-full text-white text-1.1em'>{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className='sendText'>
                        {user}
                    </p>
                </div>
            )
    )
};

export default Message;