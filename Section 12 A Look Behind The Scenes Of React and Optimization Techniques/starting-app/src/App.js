import React, { useState, useCallback, useMemo } from 'react';

// import { DemoOutput } from './components/Demo/DemoOutput';
// import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button.js';
import DemoList from './components/Demo/DemoList';

import './App.css';

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);

  // const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  console.log('App is Running');
  // const showParagraphHandler = useCallback(() => {
  // setShowParagraph(true);

  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = useCallback(() => {
  //   setAllowToggle(true);
  //   console.log('App');
  // }, []);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItm = useMemo(() => {
    console.log('List Item Running');

    return [5, 3, 1, 10, 9];
  }, []);

  return (
    <div className="app">
      {/* {showParagraph && <DemoOutput />} */}
      {/* <DemoOutput show={showParagraph} /> */}
      {/* <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}

      <h1>Hi there!</h1>

      <DemoList title={listTitle} items={listItm}></DemoList>

      <Button onClick={changeTitleHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
