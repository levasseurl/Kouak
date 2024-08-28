import { Box, IconButton } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { ArrowBackSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '50px',
                width: '100%',
            }}
        >
            <IconButton onClick={() => {navigate('/')}}>
                <ArrowBackSharp sx={{
                    color: '#FFFFF0',
                }}/>
            </IconButton>
            <LoginForm></LoginForm>
        </Box>
    );
}

export default Login
