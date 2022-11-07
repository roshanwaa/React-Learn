import React, { useState } from 'react';

// import { DemoOutput } from './components/Demo/DemoOutput';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button.js';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App is Running');
  const showParagraphHandler = () => {
    // setShowParagraph(true);
    setShowParagraph((prevShowParagraph) => prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <DemoOutput />} */}
      <DemoOutput show={false} />
      <Button onClick={showParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
