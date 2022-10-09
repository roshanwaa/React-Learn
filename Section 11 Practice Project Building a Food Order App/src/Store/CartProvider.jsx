import React from 'react';
import { CartContext } from './Cart-Context';
export const CartProvider = (props) => {
  const removedItemToCartHandler = (itm) => {};
  const addItemToCartHandler = (itm) => {};

  const cartProvider = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removedItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};
