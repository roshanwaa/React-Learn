// import { useState, useEffect } from 'react';

import Card from './Card';

// !USe Custom Hooks
import useCounter from '../hook/use-counter';

const ForwardCounter = () => {
  // * Call custom hook function
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
