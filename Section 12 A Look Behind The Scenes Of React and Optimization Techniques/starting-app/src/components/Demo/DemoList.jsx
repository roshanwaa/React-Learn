import React, { useMemo } from 'react';
import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const shortedList = useMemo(() => {
    console.log('Memo RUNNING');
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {shortedList.map((itm) => (
          <li key={itm}>{itm}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
