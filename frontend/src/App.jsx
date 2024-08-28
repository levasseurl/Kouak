import { useState } from 'react'
import Chat from './screens/Chat'
import socketIO from 'socket.io-client';



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
    <>
        <Chat messages={messages} onMessageSend={handleMessageSend} ></Chat>
    </>
  )
}

export default App
