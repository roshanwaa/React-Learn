import React from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';

export const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'm6',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
      ].map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> 350</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
