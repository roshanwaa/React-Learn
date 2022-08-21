import React, { useState } from 'react';
import FilterExpenses from '../FilterExpense/ExpensesFilter';
import { ExpensesItem } from '../Expenses/ExpensesItem';
import Card from '../UI/Cards';

import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
    console.log('In ExpensesFilter: ' + setFilterYear(selectYear));
  };
  return (
    <div>
      <Card className="expenses">
        <FilterExpenses
          selected={filteredYear}
          onChangeFilterHandler={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpensesItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
