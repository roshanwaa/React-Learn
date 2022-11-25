import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');

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
      alert('Please enter a valid name');
      return;
    }

    //* its also took the current value of the input filed by using ref
    const enteredValue2 = nameInputRef.current.value;

    console.log(enteredName);
    console.log(enteredValue2);

    // * It will clear the value of the input field by using ref and its works but its not a ideal solution because we are directly manipulating the dom here,by using vanilla js to directly reach out to the dom and change something there.

    // nameInputRef.current.value = ''; // ! ==> Not ideal, don't manipulate the DOM

    // * It will clear the value of the input field
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
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
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
