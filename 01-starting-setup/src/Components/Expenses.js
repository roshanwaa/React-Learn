import React from 'react';
import ExpensesItem from './ExpensesItem.js';
import './Expenses.css';

export default function Expenses(props) {
  return (
    <div className="expenses">
      <ExpensesItem
        title={props.items[0].title}
        amount={props.items[0].amt}
        date={props.items[0].date}
      />
      <ExpensesItem
        title={props.items[1].title}
        amount={props.items[1].amt}
        date={props.items[1].date}
      />
      <ExpensesItem
        title={props.items[2].title}
        amount={props.items[2].amt}
        date={props.items[2].date}
      />
      <ExpensesItem
        title={props.items[3].title}
        amount={props.items[3].amt}
        date={props.items[3].date}
      />
    </div>
  );
}
