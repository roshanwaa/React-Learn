import React, { useRef, useState } from 'react';
import { ErrorModal } from '../UI/ErrorModal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '../UI/Card.js';
import FormControl from '@mui/material/FormControl';
import Classes from './AddUser.module.css';
import { SubmitButton } from '../UI/Button';
import { Wrapper } from '../Helpers/Wrapper';

export const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enterUserName, setEnterUserName] = useState('');
  // const [enterUserAge, setEnterUserAge] = useState('');
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {
  //   setEnterUserName(event.target.value);
  //   // console.log(event.target.value);
  // };
  // const userAgeChangeHandler = (event) => {
  //   setEnterUserAge(event.target.value);
  //   // console.log(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();

    const nameRef = nameInputRef.current.lastChild.childNodes[0].value;
    const ageRef = ageInputRef.current.lastChild.childNodes[0].value;

    console.log(nameRef, ageRef);

    // TODO: if (name === '' || age === '' {} we can also ise this logic

    if (nameRef.trim().length === 0 || ageRef.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Pleases enter a valid name and age (non-empty value)',
      });
      // alert('Please enter your Name and Age!');
      return;
    }
    if (+ageRef < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Pleases enter a valid age.',
      });
      // alert('Age is less then the minimum age required');
      // setEnterUserAge(0);
      return;
    }

    // console.log(enterUserName, enterUserAge);

    // props.onAddUsers(nameRef, ageRef);
    // setEnterUserName('');
    // setEnterUserAge('');

    props.onAddUsers(nameRef, ageRef);
    nameInputRef.current.lastChild.childNodes[0].value = '';
    ageInputRef.current.lastChild.childNodes[0].value = '';
  };
  const errorHAndler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
                // onChange={userNameChangeHandler}
                // value={enterUserName}
                ref={nameInputRef}
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
                // onChange={userAgeChangeHandler}
                // value={enterUserAge}
                ref={ageInputRef}
              />
            </div>

            <SubmitButton type="submit">Add User</SubmitButton>
          </FormControl>
        </Box>
      </Card>
    </Wrapper>
  );
};
