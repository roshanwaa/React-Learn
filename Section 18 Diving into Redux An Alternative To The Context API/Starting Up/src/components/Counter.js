import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

// * This is use for class base Component
// import { connect } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch({ type: 'INCREMENT' });
    console.log('Increment Click');
  };

  const increaseCounterHandler = () => {
    dispatch({ type: 'increaseByAmt', amount: 5 });
    console.log('increase By Amt Click');
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
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// !------------------ Class Base Component

// class Counter extends React.Component {
//   incrementCounterHandler() {
//     this.props.increment();
//   }

//   decrementCounterHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     console.log(
//       `Increment: ${this.props.increment()} ${this.props.decrement()}`
//     );
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>COUNTER</div>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className="">
//           <button onClick={this.incrementCounterHandler.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dis) => {
//   return {
//     increment: () => dis({ type: 'INCREMENT' }),
//     decrement: () => dis({ type: 'DECREMENT' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
