import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch({ type: 'INCREMENT' });
    console.log('Increment Click');
  };
  const decrementCounterHandler = () => {
    dispatch({ type: 'DECREMENT' });

    console.log('Decrement Click');
  };

  const toggleCounterHandler = () => {
    console.log('Button Click');
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>COUNTER</div>
      <div className={classes.value}>{counter}</div>
      <div className="">
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
