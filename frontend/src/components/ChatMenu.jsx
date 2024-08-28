import { Box } from '@mui/material';
import MessageForm from '../forms/MessageForm';
import MenuDrawer from '../navigations/MenuDrawer';
import UserDrawer from '../navigations/UserDrawer';


const ChatMenu = ({ width = "100%", height = "auto", onMessageSend }) => {

  return (
    <Box
      sx={{
        alignItems: 'center',
        alignContent: 'center',
        columnGap: '5px',
        display: 'flex',
        height: height,
        width: width,
      }}
    >
        <MenuDrawer></MenuDrawer>
        <MessageForm onMessageSend={onMessageSend}></MessageForm>
        <UserDrawer></UserDrawer>
    </Box>
  );
}

export default ChatMenu
