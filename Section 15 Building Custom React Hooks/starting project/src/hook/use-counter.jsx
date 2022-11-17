import { useState, useEffect } from 'react';

const useCounter = (counterValue = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterValue) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counterValue]);

  return counter;
};

export default useCounter;
