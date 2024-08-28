import { Box, List, ListSubheader } from '@mui/material';
import MessageBox from './MessageBox';


const ChatBox = ({ messages = [], width = "100%", height = "100%" }) => {

  return (
    <Box
      sx={{
        height: height,
        width: width,
      }}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{
              textAlign: 'center',
              width: '100%',
            }}
          >
            Chat Room
          </ListSubheader>
        }
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxHeight: 500,
          overflow: 'auto',
          position: 'relative',
          rowGap: '15px',
          width: '100%',
        }}
      >
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            user={message.user}
            content={message.content}
          >
          </MessageBox>
        ))}
      </List>
    </Box>
  );
}

export default ChatBox
