import React, { useState } from 'react';
import './NewExpense.css';

import { ExpenseForm } from './ExpenseForm';

export const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpanseData={saveExpenseDataHandler}
          onCancelBtn={stopEditingHandler}
        />
      )}
    </div>
  );
};
