import React from 'react';
import './App.css';
function App() {
  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter</h1>
        <h4>Using react and Redux</h4>
        <div className="quantity">
          <a href="" className="quantity__minus" title="Decrement">
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value="0"
          />
          <a href="" className="quantity__plus" title="Increment">
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
