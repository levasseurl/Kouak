import { useState } from 'react'
import Chat from './screens/Chat'
import socketIO from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './screens/Registration';
import Login from './screens/Login';

function App() {
  const [messages, setMessages] = useState([]);

  const socket = socketIO.connect('http://localhost:3000');

  socket.on('newMessage', (arg1, arg2, callback) => {
    setMessages([...messages, arg1]);
  });

  const handleMessageSend = async (values) => {
    socket.emit("sendMessage", values);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat messages={messages} onMessageSend={handleMessageSend}/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
