// import { useState } from 'react';
import { useInput } from './Hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  // * Its check the button if enteredName and email is fill then the button is enabled otherwise is by default is disabled.
  let formIsValid = false;

  // If the input are fill the button is enabled
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // * It's check the input value is valid or if not fill the input then show the error message

  const formSubmitHandler = (e) => {
    // * set a default event or page. the page is not reloaded anymore
    e.preventDefault();

    // * check the input is empty and then exit the submit handler

    if (!enteredName && enteredEmail) {
      return;
    }

    //* its also took the current value of the input filed by using ref

    console.log(enteredName, enteredEmail);

    // * It will clear the value of the input field
    resetNameInput();

    resetEmailInput();
  };

  // * its check and set the css to the form control
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // set or define the current value of the input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          // set value to empty string
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={'error-text'}>Name must be not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          // set or define the current value of the input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          // set value to empty string
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={'error-text'}>Please enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
