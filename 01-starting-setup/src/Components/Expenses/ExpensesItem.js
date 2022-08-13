import React from 'react';
import './ExpenseItem.css';
import Cards from '../UI/Cards';
import ExpenseDate from '../Expenses/ExpenseDate';

export const ExpensesItem = (props) => {
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} ₹</div>
      </div>
    </Cards>
  );
};
