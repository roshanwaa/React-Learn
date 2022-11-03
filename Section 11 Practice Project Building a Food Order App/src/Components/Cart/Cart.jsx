import React, { useContext } from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { CartContext } from '../../Store/Cart-Context';
import CartItem from './CartItem';

export const Cart = (props) => {
  const cartCTX = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };

  const cartItemAddHandler = (itm) => {
    cartCTX.addItem(itm);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCTX.items.map((item) => (
        //  <li key={item.id}>
        //    <h3>{item.name}</h3>
        // </li>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmt = `₹  ${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
