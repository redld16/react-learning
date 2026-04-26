import { useEffect, useState } from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import InputBox from './components/InputBox';

function App() {
  const initialChats = JSON.parse(localStorage.getItem('chats')) || [];

  const [chat, setChat] = useState(initialChats);

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chat));
  }, [chat]);

  const handleReset = () => {
    const confirm = window.confirm('Are you sure you want to reset?');
    if (!confirm) return;
    localStorage.removeItem('chats');
    setChat([]);
  };

  return (
    <>
      <main className="chat-container">
        {chat.length === 0 ? (
          <div className="empty-chat">Start a conversation</div>
        ) : (
          <Chatbox chat={chat} />
        )}
        <InputBox setChat={setChat} handleReset={handleReset} />
      </main>
    </>
  );
}

export default App;
