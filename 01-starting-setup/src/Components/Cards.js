import React from 'react';
import './Cards.css';
function Card(props) {
  const classNam = 'card ' + props.className;
  return <div className={classNam}>{props.children}</div>;
}

export default Card;
