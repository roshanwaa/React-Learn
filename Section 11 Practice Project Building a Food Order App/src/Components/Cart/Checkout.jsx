import React from 'react';
import classes from './Checkout.module.css';

export const Checkout = () => {
  return (
    <form action="" className={classes.formGroup}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Name"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="inputZip">Postal Code</label>
        <input
          type="zip"
          className="form-control"
          id="inputZip"
          placeholder="Postal Code"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="inputCity">City</label>
        <input
          type="street"
          className="form-control"
          id="inputCity"
          placeholder="Street"
        />
      </div>
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};
