import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
// all components have to be written in pascal case 
// React writes code ina declarative way

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
