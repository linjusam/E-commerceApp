import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';  // Ensure this is imported before Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
