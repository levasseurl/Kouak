import { Box, ListItemText } from '@mui/material';


const MessageBox = ({ user = 'Unknow user', content = '' }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
        padding: '5px',
        width: '75%',
      }}
    >
      <ListItemText
          primary={user}
          secondary={content}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 'auto',
            '& .MuiTypography-root': {
              display: 'inline',
            }
          }}
      />
    </Box>
  );
}

export default MessageBox
