
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './eachMessage/Message';
import './scrollbar.css'

const Messages = ({
    messages,
    name
}) => {

    return (

        <ScrollToBottom className='messages flex flex-row space-y-4 p-3 overflow-y-auto  w-full h-screen'>
            {messages.map((message, i) => (
                <div key={i}>
                    <Message
                        message={message}
                        name={name}
                    />
                </div>
            ))}
        </ScrollToBottom>
    )
};

export default Messages;