import { FiSend } from "react-icons/fi";

const Input = ({
    message,
    setMessage,
    sendMessage
}) => {

    const onMessageSend = (e) => {
        setMessage(e.target.value);
    };

    const onLetterTyped = (e) => {
        if (e.key === 'Enter') {
            sendMessage(e);
        } else {
            return null;
        }
    };

    return (
        <form className="form">
            <div className="border-t-2 border-t-[#f0c19557] px-4 pt-4 sm:mb-0">
                <div className="relative flex">
                    <textarea
                        className="input lg:w-full md:w-full sm:w-full min-[320px]:w-72 bg-zinc-900 focus:outline-none focus:placeholder-gray-400 text-white placeholder-white pl-0 mb-0 py-3 whitespace-pre-wrap"
                        placeholder="Type a message"
                        value={message}
                        onChange={onMessageSend}
                        onKeyPress={onLetterTyped}
                    />
                    <div className="absolute right-0 mb-4 items-center inset-y-0 flex">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center lg:w-32 md:w-32 sm:w-32 min-[320px]:w-16  rounded-lg  py-3 transition duration-500 ease-in-out text-white bg-transparent text-3xl"
                            onClick={(e) => sendMessage(e)}
                        >
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Input;
