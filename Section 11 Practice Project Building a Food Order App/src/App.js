import React from 'react';
import { Header } from './Components/Layout/Header';
import { Meals } from './Components/Meals/Meals';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};
