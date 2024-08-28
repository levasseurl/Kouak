import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

const MessageInput = ({ onMessageSend }) => {

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onMessageSend(values);
    },
  });
  return (
    <form 
      onSubmit={formik.handleSubmit}
      style={{ 
        alignContent: 'center',
        columnGap: '5px',
        display: 'flex',
        width: '100%', 
      }}
    >
      <TextField
        id='message'
        name='message'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.message}
        variant='outlined'
        sx={{
          color: 'blue',
          width: '100%',
          '& .MuiInputBase-input': {
            color: 'white',
          }
        }}
        size='small'
      >

      </TextField>

      <Button type='submit'>Envoyer</Button>
    </form>
  );
};

export default MessageInput


