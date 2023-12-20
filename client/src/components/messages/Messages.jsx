import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './eachMessage/Message';

const Messages = ({
    messages,
    name
}) => {

    return (
        <ScrollToBottom className='messages'>
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