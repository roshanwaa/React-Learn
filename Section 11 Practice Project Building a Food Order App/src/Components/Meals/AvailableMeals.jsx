import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import { Card } from '../UI/Card';
import { MealsItem } from './MealsItems/MealsItem';

// import Spinner from 'react-bootstrap/Spinner';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Chai',
//     description: 'Finest fish and veggies',
//     price: 22,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const url =
  'https://food-order-app-9b789-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json';

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);

      const responseData = await response.json();

      // console.log(responseData);

      const loadedMealsData = [];

      for (const key in responseData) {
        loadedMealsData.push({
          id: key,
          description: responseData[key].description,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMealsData);
    };
    fetchMeals();
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealsItem
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
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
