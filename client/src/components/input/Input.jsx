import './input.css'

const Input = ({
    message,
    setMessage,
    sendMessage
}) => {

    const onMessageSend = (e) => {
        setMessage(e.target.value)
    };

    const onLetterTyped = (e) => {
        if (e.key === 'Enter') {
            sendMessage(e);
        } else {
            return null;
        };
    };


    return (
        <form className="form">
            <input
                type="text"
                className="input"
                placeholder="Type a message"
                value={message}
                onChange={onMessageSend}
                onKeyPress={onLetterTyped}
            />

            <button
                className="sendButton"
                onClick={(e) => sendMessage(e)}
            >
                Send
            </button>
        </form>
    )
};

export default Input;