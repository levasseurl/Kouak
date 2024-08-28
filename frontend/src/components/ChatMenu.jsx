import { Box, Button } from '@mui/material';
import MessageInput from './MessageInput';
import MenuDrawer from '../navigations/MenuDrawer';
import UserDrawer from '../navigations/UserDrawer';


const ChatMenu = ({ messages = [], width = "100%", height = "auto" }) => {

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
        <MessageInput></MessageInput>
        <UserDrawer></UserDrawer>
    </Box>
  );
}

export default ChatMenu
