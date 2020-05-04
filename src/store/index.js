import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import serviceListReducer from '../reducers/serviceList';
import apiInteractionReducer from "../reducers/apiInteraction";
import saga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  apiInteraction: apiInteractionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
 applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;
