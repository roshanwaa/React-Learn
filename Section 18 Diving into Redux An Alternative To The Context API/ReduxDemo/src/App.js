/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
function App() {
  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter</h1>
        <h4>Using react and Redux</h4>
        <div className="quantity">
          <button className="quantity__minus" title="Decrement">
            -
          </button>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value="0"
          />
          <button className="quantity__plus" title="Increment">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
