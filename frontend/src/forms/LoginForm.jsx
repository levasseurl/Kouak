import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onLogin(values);
      navigate('/');
    },
  });
  return (
    <form 
      onSubmit={formik.handleSubmit}
      style={{ 
        alignContent: 'center',
        backgroundColor: '#FFFFF0',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        rowGap: '15px',
        width: '500px', 
      }}
    >
      <TextField
        id='email'
        name='email'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.email}
        variant='outlined'
        label='Email'
        size='small'
      >
      </TextField>

      <TextField
        id='password'
        name='password'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.password}
        variant='outlined'
        label='Mot de passe'
        size='small'
      >
      </TextField>

      <Button type='submit'>Connexion</Button>
    </form>
  );
};

export default LoginForm


