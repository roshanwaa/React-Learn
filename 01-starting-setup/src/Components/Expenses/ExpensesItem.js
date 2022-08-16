import React, { useState } from 'react';
import './ExpenseItem.css';
import Cards from '../UI/Cards';
import ExpenseDate from '../Expenses/ExpenseDate';

export const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // console.log('Expenses item evaluate by React');
  // let title = props.title;

  const clickHandler = () => {
    setTitle('title');
    // title = 'Update Title!';
    console.log(title);
  };
  // clickHandler();

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} ₹</div>
        <button onClick={clickHandler}>Change Button</button>
      </div>
    </Cards>
  );
};
