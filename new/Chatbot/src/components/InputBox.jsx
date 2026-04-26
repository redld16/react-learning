import { useState } from 'react';

const InputBox = ({ setChat }) => {
  const [input, setInput] = useState('');

  const handleInput = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    // Add user message
    setChat((chat) => [...chat, { message: userMessage, user: 'user' }]);
    setInput('');

    // Call backend
    const res = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    // Add bot reply
    setChat((chat) => [...chat, { message: data.reply, user: 'bot' }]);
  };

  return (
    <form className="chat-input" onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Type something..."
      />

      <button disabled={!input} onClick={handleInput}>
        Send
      </button>
    </form>
  );
};

export default InputBox;
