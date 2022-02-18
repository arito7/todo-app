import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
(() => {
  const body = document.querySelector('body');
  const root = document.createElement('div');
  root.id = 'root';
  body.appendChild(root);
  ReactDOM.render(<App />, root);
})();
