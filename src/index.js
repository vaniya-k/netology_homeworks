import React from 'react';
import ReactDOM from 'react-dom';
import ServiceList from './components/ServiceList.js';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ServiceList />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch({type: 'FETCH_SERVICES_START'});
