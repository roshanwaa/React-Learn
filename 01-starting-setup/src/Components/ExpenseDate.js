import React from 'react';
import './ExpenseDate.css';
export default function ExpenseDate(props) {
  const dateMonth = props.date.toLocaleString('en-IN', { month: 'long' });
  const dateYear = props.date.toLocaleString('en-IN', { year: 'numeric' });
  const dateDay = props.date.toLocaleString('en-IN', { day: '2-digit' });

  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{dateMonth}</div>
        <div className="expense-date__year">{dateYear}</div>
        <div className="expense-date__day">{dateDay}</div>
      </div>
    </div>
  );
}
