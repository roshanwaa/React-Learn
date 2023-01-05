const redux = require('redux');
// import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  console.log('counterReducer Call');

  //   console.log(state);
  return {
    counter: state.counter + 1,
  };
};

// console.log(counterReducer({ counter: 10 }));

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  //   const latestState = store.getState(state.counter).subscribe;
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'counter' });
