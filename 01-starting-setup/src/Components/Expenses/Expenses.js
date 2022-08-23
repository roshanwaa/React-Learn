import React, { useState } from 'react';
import FilterExpenses from '../FilterExpense/ExpensesFilter';
import { ExpensesList } from './ExpensesList';
import Card from '../UI/Cards';

import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
    console.log('In Expenses Filter: ' + selectYear);
  };

  const filterExpensesYr = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <h2>No Expenses Available.</h2>;

  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpensesYr.map((expense) => (
  //     <ExpensesItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <FilterExpenses
          selected={filteredYear}
          onChangeFilterHandler={filterChangeHandler}
        />
        {/* !TODO: Stand alone Method to filter expenses IN IF else Case*/}
        {/* FIXME: {filterExpenses.length === 0 && <p>No Expenses Available.</p>}

        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/*  TODO: Turnery Method to filter expenses*/}
        {/* FIXME:{filterExpenses.length === 0 ? (
          <p>No Expenses Available.</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* Other Way */}
        <ExpensesList items={filterExpensesYr} />.
      </Card>
    </div>
  );
}
