import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import { NewExpense } from './Components/NewExpense/NewExpense';

const DUMMY_COMPONENT = [
  {
    id: 'e1',
    title: 'Chai',
    amount: 500,
    date: new Date(2020, 6, 15),
  },
  {
    id: 'e2',
    title: 'Travel',
    amount: 300,
    date: new Date(2021, 5, 25),
  },
  {
    id: 'e3',
    title: 'Petrol',
    amount: 1000,
    date: new Date(2022, 5, 30),
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 2000,
    date: new Date(2022, 6, 2),
  },
];

export const App = () => {
  const [expenses, setExpense] = useState(DUMMY_COMPONENT);

  const addExpenseHandler = (expense) => {
    console.log('In App JS File');
    console.log(expense);

    setExpense((prvExpense) => {
      return [expense, ...prvExpense];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'Lets Get Started'),
  //   React.createElement(Expenses, { items: myExpenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
