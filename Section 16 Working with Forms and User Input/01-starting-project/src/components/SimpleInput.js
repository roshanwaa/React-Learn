import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Is Validity');
    }

    return () => {};
  }, []);

  const nameInputChangeHandler = (e) => {
    // * its took the current value of the input filed by using useState
    setEnteredName(e.target.value);
    console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    // * set a default event or page. the page is not reloaded anymore
    e.preventDefault();

    // * check the input is empty and then exit the submit handler
    if (enteredName.trim() === '') {
      // if the input is empty then exit the submit handler and alert a message
      setEnteredNameIsValid(false);
      // alert('Please enter a valid name');
      console.log('Please enter a valid name');
      return;
    }

    setEnteredNameIsValid(true);

    //* its also took the current value of the input filed by using ref
    // const enteredValue2 = nameInputRef.current.value;

    console.log(enteredName);
    // console.log(enteredValue2);

    // * It will clear the value of the input field by using ref and its works but its not a ideal solution because we are directly manipulating the dom here,by using vanilla js to directly reach out to the dom and change something there.

    // nameInputRef.current.value = ''; // ! ==> Not ideal, don't manipulate the DOM

    // * It will clear the value of the input field
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';

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
          // set value to empty string
          value={enteredName}
        />
        {!enteredNameIsValid && (
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
