import React from 'react';
import classes from './input.module.css';
export const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ''
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        // value={enteredEmail}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
