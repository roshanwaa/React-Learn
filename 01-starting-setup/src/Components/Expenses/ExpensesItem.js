import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Cards from '../UI/Cards';
import './ExpenseItem.css';

export const ExpensesItem = (props) => {
  /*  const [title, setTitle] = useState(props.title);
  // console.log('Expenses item evaluate by React');
  // let title = props.title;

  const clickHandler = () => {
    setTitle('Expense Title');
    // title = 'Update Title!';
    console.log(title);
  }; */
  // clickHandler();

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} ₹</div>
        {/* <button onClick={clickHandler} className="expense-Btn">
          Change Button
        </button> */}
      </div>
    </Cards>
  );
};
