import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.onInvalid ? 'red' : '#7FB77E ')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.onInvalid ? '#16213e' : '#7FB77E')};
    background: ${(props) => (props.onInvalid ? '#EE6983' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #eee3cb;
    border-color: #16213e;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  // const [isDisabled, setDisabled] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim() > '') {
      setIsValid(true);
      // setDisabled(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() === '') {
      console.log('Please enter a valid value');
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl onInvalid={!isValid}>
        <label>Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
