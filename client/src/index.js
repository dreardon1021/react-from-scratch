import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import App from './components/App';


const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)