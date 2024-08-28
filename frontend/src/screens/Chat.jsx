import { Box, Typography } from '@mui/material';
import ChatBox from '../components/ChatBox';
import ChatMenu from '../components/ChatMenu';


const Chat = ({ messages, onMessageSend }) => {

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
            <ChatMenu onMessageSend={onMessageSend}></ChatMenu>
            <ChatBox messages={messages}></ChatBox>
        </Box>
    );
}

export default Chat
