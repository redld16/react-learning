const Chatbox = ({ chat }) => {
  return (
    <div className="chat-box">
      {chat.map(({ message, user }, index) =>
        user === 'bot' ? (
          <div className="message-row bot" key={index}>
            <div className="icon">🤖</div>
            <div className="message">{message}</div>
          </div>
        ) : (
          <div className="message-row user" key={index}>
            <div className="message">{message}</div>
            <div className="icon">👤</div>
          </div>
        ),
      )}
    </div>
  );
};

export default Chatbox;
