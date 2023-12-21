import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {

    let isSendByCurrentUser = false;

    const trimmedName = (name || '').trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    };

    return (
        <div className={`flex flex-col ${isSendByCurrentUser ? 'items-center' : 'items-center'}`}>
            <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-${isSendByCurrentUser ? 'center' : 'end'}`}>
                <div>
                    <span className={`px-4 py-2 mt-5 border-2 border-zinc-800 inline-block ${isSendByCurrentUser ? 'bg-gray-300 text-gray-600' : ' bg-[zinc-800] lg:w-96 md:w-72 sm:w-72 min-[320px]:w-64 min-[320px]:text-[17px]  text-white'} flex flex-row items-center justify-center break-all text-center text-lg`}>
                        {ReactEmoji.emojify(text)}
                    </span>
                </div>
            </div>
            {!isSendByCurrentUser && (
                <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2'>
                    <div>
                    <span className='px-4 py-2 border-2 mt-[-10px] lg:ml-[170%] lg:w-32 lg:h-12 md:ml-[110%] md:w-32 md:h-12 sm:ml-[100%] sm:w-32 sm:h-12 min-[320px]:w-32 min-[320px]:ml-[80%] min-[320px]:h-12 min-[320px]:text-md text-center text-md border-zinc-800 inline-block bg-zinc-900 text-[#f0c195e5] text-lg break-all rounded-tl-none rounded-2xl'>{user}</span>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Message;