import React, { useContext } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../Store/AuthContext';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
