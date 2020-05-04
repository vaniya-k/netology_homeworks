import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// store.dispatch({type: 'FETCH_SERVICES_START'});
// store.dispatch({type: 'CHANGE_FOCUSED_ITEM_ID', payload: {id: 1}});
