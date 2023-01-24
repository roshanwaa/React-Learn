import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    console.log('Button Click');
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>COUNTER</div>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
