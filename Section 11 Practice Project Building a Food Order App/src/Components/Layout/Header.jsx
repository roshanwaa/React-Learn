import React from 'react';
import classes from './Header.module.css';
// import mealsImg from '../../Assets/meals.jpg';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <img
          src="https://images.yourstory.com/cs/images/companies/ChaiSutta-1637585790850.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
          alt=""
        />
        <h1>Chai Sutta Bar</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        {/* <img className={classes['main-image']} src={mealsImg} alt="chai" /> */}
        <img
          src="https://images.unsplash.com/photo-1638204380661-db83014e4a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="chai"
        />
      </div>
    </>
  );
};
