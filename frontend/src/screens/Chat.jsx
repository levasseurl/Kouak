import { useState } from 'react'
import { Box, Typography } from '@mui/material';
import ChatBox from '../components/ChatBox';
import ChatMenu from '../components/ChatMenu';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';


const Chat = () => {
    const [messages, setMessage] = useState([
        { user: 'user1', content: 'Bonjour !' },
        { user: 'user2', content: 'Salut !' },
        { user: 'user1', content: 'Tout va bien ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
        { user: 'user2', content: 'Très bien merci ?' },
    ]);

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                rowGap: '15px',
                width: '50vw',
            }}
        >
            <Typography variant='h4' style={{textAlign: 'center'}}>Kouak</Typography>
            <ChatMenu></ChatMenu>
            <ChatBox messages={messages}></ChatBox>
        </Box>
    );
}

export default Chat
