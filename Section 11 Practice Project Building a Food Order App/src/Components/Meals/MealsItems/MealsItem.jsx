import React from 'react';
import classes from './MealItem.module.css';
import { MealsItemForm } from './MealsItemForm';

export const MealsItem = (props) => {
  const price = `₹ ${props.price.toFixed(3)}`;
  return (
    <li className={classes.meals}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>
          <h4>{props.description}</h4>
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} />
      </div>
    </li>
  );
};
