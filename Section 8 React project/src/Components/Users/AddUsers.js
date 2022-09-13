import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '../UI/Card.js';
import FormControl from '@mui/material/FormControl';
import Classes from './AddUser.module.css';
import { SubmitButton } from '../UI/Button';

export const AddUsers = (props) => {
  const addUserHandler = (event) => {
    console.log('Submit button Work');
    event.preventDefault();
  };
  return (
    <Card className={Classes.input}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={addUserHandler}
      >
        <FormControl>
          <label htmlFor="userName">Username</label>
          <div>
            <TextField
              id="outlined-required userName"
              label="Username"
              type="text"
            />
          </div>
          <label htmlFor="age">Age (in years)</label>
          <div>
            <TextField
              id="outlined-password-input age"
              label="Age"
              type="number"
              minRows="0"
              step="10"
            />
          </div>

          <SubmitButton type="submit">Add User</SubmitButton>
        </FormControl>
      </Box>
    </Card>
  );
};
