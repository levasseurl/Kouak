import { Box, Button } from '@mui/material';
import MessageInput from './MessageInput';
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
        {/* <Button variant="contained">Inscription</Button>
        <Button variant="contained">Connexion</Button> */}
        <MenuDrawer></MenuDrawer>
        <MessageInput onMessageSend={onMessageSend}></MessageInput>
        <UserDrawer></UserDrawer>
    </Box>
  );
}

export default ChatMenu
