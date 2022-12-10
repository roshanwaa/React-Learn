// import { useState } from 'react';
import { useInput } from './Hooks/useInput';

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // call the useInput
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

  // its set the enteredName is  not a empty string

  // check the entered name and email is not empty and the name is not touched
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  // * Its check the button if enteredName and email is fill then the button is enabled otherwise is by default is disabled.
  let formIsValid = false;

  // If the input are fill the button is enabled
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // * its check the current value of the input is valid and its valid by default cause the enteredNameIsValid are true

  // * its took the current value of the input filed by using useState
  /*  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    console.log(e.target.value);
  }; */
  // const emailInputChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  // * It's check the input value is valid or if not fill the input then show the error message
  // const nameInputBlurHandler = (e) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmitHandler = (e) => {
    // * set a default event or page. the page is not reloaded anymore
    e.preventDefault();

    // resetNameInput(true);

    // * check the input is empty and then exit the submit handler

    if (!enteredName && enteredEmail) {
      return;
    }

    //* its also took the current value of the input filed by using ref

    console.log(enteredName, enteredEmail);

    // * It will clear the value of the input field
    resetNameInput();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
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
