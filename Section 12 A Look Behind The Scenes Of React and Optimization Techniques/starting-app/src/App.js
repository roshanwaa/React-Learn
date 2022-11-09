import React, { useState, useCallback } from 'react';

// import { DemoOutput } from './components/Demo/DemoOutput';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button.js';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App is Running');
  const showParagraphHandler = useCallback(() => {
    // setShowParagraph(true);

    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
    console.log('App');
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <DemoOutput />} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={showParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
