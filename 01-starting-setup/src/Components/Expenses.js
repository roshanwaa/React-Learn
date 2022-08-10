import React from 'react';
import ExpensesItem from './ExpensesItem.js';
import './Expenses.css';

export default function Expenses() {
  const myExpenses = [
    {
      id: 'e1',
      title: 'Chai',
      amt: 500,
      date: new Date(2022, 6, 15),
    },
    {
      id: 'e2',
      title: 'Travel',
      amt: 300,
      date: new Date(2022, 5, 25),
    },
    {
      id: 'e3',
      title: 'Petrol',
      amt: 1000,
      date: new Date(2022, 5, 30),
    },
    {
      id: 'e4',
      title: 'Food',
      amt: 2000,
      date: new Date(2022, 6, 2),
    },
  ];
  return (
    <div className="expenses">
      <ExpensesItem
        title={myExpenses[0].title}
        amount={myExpenses[0].amt}
        date={myExpenses[0].date}
      />
      <ExpensesItem
        title={myExpenses[1].title}
        amount={myExpenses[1].amt}
        date={myExpenses[1].date}
      />
      <ExpensesItem
        title={myExpenses[2].title}
        amount={myExpenses[2].amt}
        date={myExpenses[2].date}
      />
      <ExpensesItem
        title={myExpenses[3].title}
        amount={myExpenses[3].amt}
        date={myExpenses[3].date}
      />
    </div>
  );
}
