import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.module.css';

const Slide = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <div id="root">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </div>
  );
};

export default Slide;