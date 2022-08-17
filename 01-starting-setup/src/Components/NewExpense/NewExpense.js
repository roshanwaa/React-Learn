import React from 'react';
import './NewExpense.css';

import { ExpenseForm } from './ExpenseForm';

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler} />
    </div>
  );
};
