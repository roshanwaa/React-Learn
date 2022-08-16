import React from 'react';
import './Cards.css';
const Card = (props) => {
  const classNam = 'card ' + props.className;
  return <div className={classNam}>{props.children}</div>;
};

export default Card;
