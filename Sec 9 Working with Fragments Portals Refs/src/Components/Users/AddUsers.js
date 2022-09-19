import React, { useState } from 'react';
import { ErrorModal } from '../UI/ErrorModal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '../UI/Card.js';
import FormControl from '@mui/material/FormControl';
import Classes from './AddUser.module.css';
import { SubmitButton } from '../UI/Button';

export const AddUsers = (props) => {
  const [enterUserName, setEnterUserName] = useState('');
  const [enterUserAge, setEnterUserAge] = useState('');
  const [error, setError] = useState();

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
    if (enterUserAge === '' || enterUserName === '') {
      setError({
        title: 'Invalid Input',
        message: 'Pleases enter a valid name and age (non-empty value)',
      });
      // alert('Please enter your Name and Age!');
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Pleases enter a valid age.',
      });
      // alert('Age is less then the minimum age required');
      setEnterUserAge(0);
      return;
    }
    console.log(enterUserName, enterUserAge);
    props.onAddUsers(enterUserName, enterUserAge);
    setEnterUserName('');
    setEnterUserAge('');
  };
  const errorHAndler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHAndler}
        />
      )}
      <Card className={Classes.input}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '30ch' },
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
                value={enterUserName}
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
                value={enterUserAge}
              />
            </div>

            <SubmitButton type="submit">Add User</SubmitButton>
          </FormControl>
        </Box>
      </Card>
    </div>
  );
};
