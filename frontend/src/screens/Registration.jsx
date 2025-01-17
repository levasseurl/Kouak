import { Box, IconButton } from '@mui/material';
import RegistrationForm from '../forms/RegistrationForm';
import { ArrowBackSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Registration = ({ onRegistration }) => {
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
            <RegistrationForm onRegistration={onRegistration}></RegistrationForm>
        </Box>
    );
}

export default Registration