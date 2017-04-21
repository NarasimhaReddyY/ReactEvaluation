// Application entrypoint.

// Load up the application styles
// require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './modules/news/presentational/App.jsx';
import manageApp from './reducers/index.jsx';

const store = createStore(
  manageApp,
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
