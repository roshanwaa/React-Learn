import React from 'react';
import { Header } from './Components/Layout/Header';
import { Meals } from './Components/Meals/Meals';
import { Cart } from './Components/Cart/Cart';

export const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};
