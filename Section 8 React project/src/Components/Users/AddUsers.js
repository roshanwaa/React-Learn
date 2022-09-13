import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '../UI/Card.js';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
export const AddUsers = (props) => {
  const addUserHandler = (event) => {
    alert('Submit button Work');
    event.preventDefault();
  };
  return (
    <Card>
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

          <Button
            variant="contained"
            size="large"
            color="primary"
            onSubmit={addUserHandler}
          >
            Success
          </Button>
        </FormControl>
      </Box>
    </Card>
  );
};
