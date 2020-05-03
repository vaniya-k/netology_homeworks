import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import serviceListReducer from '../reducers/serviceList';
import apiInteractionReducer from "../reducers/apiInteraction";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { serviceListEpic } from '../epics/index.js';


const reducer = combineReducers({
  serviceList: serviceListReducer,
  apiInteraction: apiInteractionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  serviceListEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;




// import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';
// import skillsReducer from '../reducers/skills';
// import { changeSearchEpic, searchSkillsEpic } from '../epics';

// const reducer = combineReducers({
//   skills: skillsReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const epic = combineEpics(
//   changeSearchEpic,
//   searchSkillsEpic,
// );

// const epicMiddleware = createEpicMiddleware();

// const store = createStore(reducer, composeEnhancers(
//   applyMiddleware(epicMiddleware)
// ));

// epicMiddleware.run(epic);

// export default store;