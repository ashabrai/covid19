import {createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { watchSagas } from '../store/sagas/index';

const saga = createSagaMiddleware();

const composeEnchancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

const enhancer = composeEnchancers(applyMiddleware(saga));

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;