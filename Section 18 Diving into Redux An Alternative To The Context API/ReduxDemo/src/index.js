import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider />
    <App />
  </>
);
