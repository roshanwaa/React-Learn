import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className="form-control">
        <label style={{ color: !isValid ? '#AC4425' : '#7FB77E' }}>Goal</label>
        <input
          type="text"
          style={{
            borderColor: !isValid ? '#AC4425' : '#7FB77E ',
            backgroundColor: !isValid ? '#AC4425' : '#7FB77E ',
            color: !isValid ? '#F7ECDE' : '#000000 ',
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
