import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { thunk } from 'redux-thunk';

import './index.css';
import { logger } from './middlewares';
import { pokemonsReducer } from './reducers/pokemons';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEbhancers = composeAlt(
  applyMiddleware(thunk, logger)
);

const store = createStore(
  pokemonsReducer,
  composedEbhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
