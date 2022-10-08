import React from 'react';
import { Input } from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id, // this changed!
          type: 'number',
          min: '1',
          max: '50',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
    </form>
  );
};
