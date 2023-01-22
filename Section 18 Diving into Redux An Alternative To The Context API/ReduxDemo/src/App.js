/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './Action/index';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const myState = useSelector((state) => state.changeTheNumber);

  const changeHandlerInc = () => {
    return dispatch(incNumber());
  };

  const changeHandlerDec = () => {
    return dispatch(decNumber());
  };
  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter</h1>
        <h4>Using react and Redux</h4>
        <div className="quantity">
          <button
            className="quantity__minus"
            title="Decrement"
            onClick={changeHandlerDec}
          >
            -
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <button
            className="quantity__plus"
            title="Increment"
            onClick={changeHandlerInc}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
