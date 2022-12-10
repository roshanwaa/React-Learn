import { useInput } from './Hooks/useInput';
const BasicForm = (props) => {
  const {
    value: fNameEntered,
    isValid: fNameEnteredIsValid,
    hasError: fNameInputHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameInputBlurHandler,
    reset: fNameResetInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lNameEntered,
    isValid: lNameEnteredIsValid,
    hasError: lNameInputHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameInputBlurHandler,
    reset: lNameResetInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailEntered,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (fNameEnteredIsValid && lNameEnteredIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!fNameEntered && !lNameEntered && !emailEntered) {
      return <h2>Wrong Input</h2>;
    }

    fNameResetInput();
    lNameResetInput();
    resetEmailInput();
  };

  const fNameInputClasses = fNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const lNameInputClasses = lNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={fNameInputClasses}>
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={fNameChangeHandler}
            onBlur={fNameInputBlurHandler}
            value={fNameEntered}
            placeholder="Enter First Name"
          />
          {fNameInputHasError && (
            <p className={'error-text'}>Please enter a valid Name</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={lNameChangeHandler}
            onBlur={lNameInputBlurHandler}
            value={lNameEntered}
            placeholder="Enter last Name"
          />
          {lNameInputHasError && (
            <p className={'error-text'}>Please enter a valid Name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailEntered}
          placeholder="Enter Email"
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

export default BasicForm;
