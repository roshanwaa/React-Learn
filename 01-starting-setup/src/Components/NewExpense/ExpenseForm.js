import React, { useState } from 'react';

import './ExpenseForm.css';
export const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');
  //   const [usrInput, setInput] = useState({
  //     enterTitle: '',
  //     enterAmount: '',
  //     enterDate: '',
  //   });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    // setInput({ ...usrInput, enterTitle: event.target.value });
    // console.log(usrInput);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);

    // setInput({ ...usrInput, enterAmount: event.target.value });

    // console.log(usrInput);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);

    // setInput({ ...usrInput, enterDate: event.target.value });
    // console.log(usrInput);
  };

  const submitHandler = (event) => {
    console.log(enterAmount, enterTitle, enterDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="10"
            step="10"
            placeholder="Amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-08-01"
            max="2022-12-31"
            placeholder="dd.mm.yyyy"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button">Add Expenses</button>
      </div>
    </form>
  );
};
