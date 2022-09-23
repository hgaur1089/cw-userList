import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log('ACTION_TYPE = ', action.type);
  if(typeof action !== 'function') {
    console.log('ACTION = ', action);
  }
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
  </Provider>
);