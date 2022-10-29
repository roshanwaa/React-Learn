import React, { useReducer } from 'react';
import { CartContext } from './Cart-Context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateItem = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updateItem,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (itm) => {
    dispatchCartAction({ type: 'ADD', item: itm });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartProvider = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removedItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};
