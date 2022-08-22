import React, { useState } from 'react';
import FilterExpenses from '../FilterExpense/ExpensesFilter';
import { ExpensesItem } from '../Expenses/ExpensesItem';
import Card from '../UI/Cards';

import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
    console.log('In Expenses Filter: ' + selectYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <FilterExpenses
          selected={filteredYear}
          onChangeFilterHandler={filterChangeHandler}
        />
        {filterExpenses.map((expense) => (
          <ExpensesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
