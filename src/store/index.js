import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import serviceListReducer from '../reducers/serviceList';
import apiInteractionReducer from "../reducers/apiInteraction";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { serviceListEpic, focusedItemEpic } from '../epics/index.js';


const reducer = combineReducers({
  serviceList: serviceListReducer,
  apiInteraction: apiInteractionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  serviceListEpic,
  focusedItemEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
