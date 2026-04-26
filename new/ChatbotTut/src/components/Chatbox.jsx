import useAutoScroll from '../hooks/useAutoScroll';
import '../style/Chatbox.css';

const Chatbox = ({ chat }) => {
  const chatRef = useAutoScroll([chat.length]);

  return (
    <div className="chat-box" ref={chatRef}>
      {chat.map(({ message, user, id, time }) => (
        <div className={`message-row ${user}`} key={id}>
          {user === 'bot' && <div className="icon">🤖</div>}

          <div className="message">
            {message}
            <p className="time">{time}</p>
          </div>

          {user !== 'bot' && <div className="icon">👤</div>}
        </div>
      ))}
    </div>
  );
};

export default Chatbox;
