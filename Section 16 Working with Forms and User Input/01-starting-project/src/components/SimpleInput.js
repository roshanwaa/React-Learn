import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');

  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // its set the enteredName is  not a empty string

  const enteredNameIsValid = enteredName.trim() !== '';

  // check the entered name is not empty and the name is not touched
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // * its check the current value of the input is valid and its valid by default cause the enteredNameIsValid are true

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Is Validity');
  //   }

  //   return () => {};
  // }, []);

  const nameInputChangeHandler = (e) => {
    // * its took the current value of the input filed by using useState
    setEnteredName(e.target.value);

    // * It's check the if the input is fill the error message is disappear and set the setEnteredNameIsValid is true.
    // if (e.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
    console.log(e.target.value);
  };

  // * It's check the input value is valid or if not fill the input then show the error message
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    //   // return;
    // }
  };

  const formSubmitHandler = (e) => {
    // * set a default event or page. the page is not reloaded anymore
    e.preventDefault();

    setEnteredNameTouched(true);

    // * check the input is empty and then exit the submit handler
    // if (enteredName.trim() === '') {
    //   // if the input is empty then exit the submit handler and alert a message
    //   setEnteredNameIsValid(false);
    //   // alert('Please enter a valid name');
    //   console.log('Please enter a valid name');
    //   return;
    // }

    if (!enteredName) {
      return;
    }

    // setEnteredNameIsValid(true);

    //* its also took the current value of the input filed by using ref
    // const enteredValue2 = nameInputRef.current.value;

    console.log(enteredName);
    // console.log(enteredValue2);

    // * It will clear the value of the input field by using ref and its works but its not a ideal solution because we are directly manipulating the dom here,by using vanilla js to directly reach out to the dom and change something there.

    // nameInputRef.current.value = ''; // ! ==> Not ideal, don't manipulate the DOM

    // * It will clear the value of the input field
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  // * its check the form control is valid or not
  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // set or define the current value of the input
          ref={nameInputRef}
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
