import React from 'react';
import ServiceList from './components/ServiceList';
import ServiceDetails from './components/ServiceDetails'
import {Router, Route, Switch} from 'react-router-dom';
import store from './store';
import {createBrowserHistory} from "history";
import {CHANGE_FOCUSED_ITEM_ID, FETCH_SERVICES_START, FETCH_DETAILS_START} from './actions/actionTypes';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" render={() => {
          store.dispatch({type: FETCH_SERVICES_START});
          return <ServiceList/>;
        }}
        />
        <Route exact path="/:id" render={(props) => {
          store.dispatch({type: FETCH_DETAILS_START});
          store.dispatch({type: CHANGE_FOCUSED_ITEM_ID, payload: {id: props.match.params.id}});
          return <ServiceDetails/>;
        }}
        />
      </Switch>
    </Router>
  );
}

export default App;