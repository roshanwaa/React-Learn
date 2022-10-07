// import React, { useRef, useEffect } from 'react';
import React, { useRef, useImperativeHandle } from 'react';
import classes from './input.module.css';
export const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(
    ref,
    () => {
      return { focus: activate };
    },
    []
  );

  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ''
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        // value={enteredEmail}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
