import React from 'react';
import { v4 as uuid } from 'uuid';

import classes from './Movie.module.css';

const Movie = (props) => {
  const unique_id = uuid();
  return (
    <li className={classes.movie} key={unique_id}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.characters}</p>
    </li>
  );
};

export default Movie;
