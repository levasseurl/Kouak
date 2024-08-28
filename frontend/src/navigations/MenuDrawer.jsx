import { ArrowForwardSharp, ChatBubbleSharp, CreateSharp} from '@mui/icons-material';
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    let routes = {
      "Chat": "/",
      "Inscription": "/registration",
      "Connexion": "/login",
    }
    
    navigate(routes[path]);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Chat', 'Inscription', 'Connexion'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {handleNavigation(text)}}>
              <ListItemIcon>
                {text === "Chat" && <ChatBubbleSharp/>}
                {text === "Inscription" && <CreateSharp/>}
                {text === "Connexion" && <ArrowForwardSharp/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MenuDrawer