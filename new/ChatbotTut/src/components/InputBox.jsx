import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import "../style/InputBox.css";

const InputBox = ({ setChat, handleReset }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    const time = dayjs().valueOf();

    const userMessage = {
      message: currentInput,
      user: 'user',
      id: crypto.randomUUID(),
      time: dayjs(time).format('h:mma'),
    };

    const loadingMessage = {
      message: (
        <img
          src="loading-spinner.gif"
          alt="loading spinner"
          className="loading-spinner"
        />
      ),
      user: 'bot',
      id: crypto.randomUUID(),
      time: dayjs(time).format('h:mma'),
    };

    setInput('');
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
    setIsLoading(true);

    setChat((chat) => [...chat, userMessage, loadingMessage]);

    try {
      const res = await window.Chatbot.getResponseAsync(currentInput);

      const botMessage = {
        message: res,
        user: 'bot',
        id: crypto.randomUUID(),
        time: dayjs(time).format('h:mma'),
      };

      setChat((chat) =>
        chat.map((msg) => (msg.id === loadingMessage.id ? botMessage : msg)),
      );
    } catch {
      setChat((chat) =>
        chat.map((msg) =>
          msg.id === loadingMessage.id
            ? { ...msg, message: 'Error occurred' }
            : msg,
        ),
      );
    }

    setIsLoading(false);
  };

  return (
    <form
      className="chat-area"
      onSubmit={(e) => {
        e.preventDefault();
        handleInput();
      }}
    >
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        readOnly={isLoading}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleInput();
          }
        }}
      />

      <button disabled={!input.trim() || isLoading} className="sendBtn">
        {isLoading ? '...' : 'Send'}
      </button>
      <button type="button" className="clearBtn" onClick={handleReset}>
        clear
      </button>
    </form>
  );
};

export default InputBox;
