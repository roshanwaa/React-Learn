import React from 'react';
import classes from './AvailableMeals.module.css';
import { Card } from '../UI/Card';
import { MealsItem } from './MealsItems/MealsItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chai',
    description: 'Finest fish and veggies',
    price: 22,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((item) => {
    return (
      <MealsItem
        id={item.id} // this is new!
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
