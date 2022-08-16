import React from 'react';

import Expenses from './Components/Expenses/Expenses';
import { NewExpense } from './Components/NewExpense/NewExpense';

export const App = () => {
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

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'Lets Get Started'),
  //   React.createElement(Expenses, { items: myExpenses })
  // );

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={myExpenses}></Expenses>
    </div>
  );
};
