import React from 'react';
import classes from './Card.module.css';
import { ErrorModal } from './ErrorModal';
export const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
      <ErrorModal />
    </div>
  );
};
