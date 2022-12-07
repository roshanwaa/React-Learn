import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  //   const [formIsValid, setFormIsValid] = useState(false);

  // its set the enteredName is  not a empty string

  const enteredNameIsValid = enteredName.trim() !== '';

  const enteredEmailIsValid = enteredEmail.includes('@');

  // check the entered name is not empty and the name is not touched
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // * its check the current value of the input is valid and its valid by default cause the enteredNameIsValid are true

  const nameInputChangeHandler = (e) => {
    // * its took the current value of the input filed by using useState
    setEnteredName(e.target.value);

    console.log(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // * It's check the input value is valid or if not fill the input then show the error message
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    // * set a default event or page. the page is not reloaded anymore
    e.preventDefault();

    setEnteredNameTouched(true);

    // * check the input is empty and then exit the submit handler

    if (!enteredName && enteredEmail) {
      return;
    }

    //* its also took the current value of the input filed by using ref

    console.log(enteredName, enteredEmail);

    // * It will clear the value of the input field
    setEnteredName('');
    setEnteredEmail('');

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  // * its check the form control is valid or not
  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsValid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // set value to empty string
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className={'error-text'}>Name must be not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          // set or define the current value of the input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          // set value to empty string
          value={enteredEmail}
        />
        {emailInputIsValid && (
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
