import { useState } from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import InputBox from './components/InputBox';

function App() {
  const initialChats = [
    { message: 'Hi, how can I help you today?', user: 'bot' },
  ];

  const [chat, setChat] = useState(initialChats);
  return (
    <>
      <main className="chat-container">
        <Chatbox chat={chat} />
        <InputBox setChat={setChat} />
      </main>
    </>
  );
}

export default App;
