import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '../UI/Card.js';
import FormControl from '@mui/material/FormControl';
import Classes from './AddUser.module.css';
import { SubmitButton } from '../UI/Button';

export const AddUsers = (props) => {
  const [enterUserName, setEnterUserName] = useState('');
  const [enterUserAge, setEnterUserAge] = useState('');

  const userNameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
    // console.log(event.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnterUserAge(event.target.value);
    // console.log(event.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterUserName, enterUserAge);
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
              onChange={userNameChangeHandler}
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
              onChange={userAgeChangeHandler}
            />
          </div>

          <SubmitButton type="submit">Add User</SubmitButton>
        </FormControl>
      </Box>
    </Card>
  );
};
