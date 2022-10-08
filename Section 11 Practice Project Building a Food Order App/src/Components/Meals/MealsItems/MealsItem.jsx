import React from 'react';
import classes from './MealItem.module.css';

export const MealsItem = (props) => {
  const price = `₹ ${props.price.toFixed(3)}`;
  return (
    <li className={classes.meals}>
      <div className="">
        <h2>{props.name}</h2>
        <div className={classes.description}>
          <h4>{props.description}</h4>
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className=""></div>
    </li>
  );
};
