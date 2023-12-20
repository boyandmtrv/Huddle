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
        <form className="form flex items-center justify-between bg-blue-500 rounded-t-md h-16 w-full">
            <input
                type="text"
                className="input border-none rounded-none p-5 w-full font-lg focus:outline-none"
                placeholder="Type a message"
                value={message}
                onChange={onMessageSend}
                onKeyPress={onLetterTyped}
            />

            <button
                className="sendButton text-white uppercase bg-blue-500 py-5 px-20 inline-block border-none w-8"
                onClick={(e) => sendMessage(e)}
            >
                Send
            </button>
        </form>
    )
};

export default Input;