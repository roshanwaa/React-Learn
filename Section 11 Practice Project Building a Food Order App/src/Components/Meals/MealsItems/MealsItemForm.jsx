import React, { useState, useRef } from 'react';
import { Input } from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 50
    ) {
      setAmountIsValid(false);
      // console.log(enteredAmountNum);
      return;
    }
    props.onAddToChart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: 'number',
          id: props.id, // this changed!
          min: '1',
          max: '50',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button value="Submit" type="submit">
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};
