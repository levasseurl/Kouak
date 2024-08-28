import { Box, IconButton } from '@mui/material';
import LoginForm from '../forms/LoginForm';
import { ArrowBackSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
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
            <LoginForm onLogin={onLogin}></LoginForm>
        </Box>
    );
}

export default Login
