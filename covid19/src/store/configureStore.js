/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers/createReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: support for redux-sagas https://redux-saga.js.org/
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          serialize: true, // because https://github.com/zalmoxisus/redux-devtools-extension/issues/378
          trace: true, // Enables the Trace tab in Redux DevTools. Overview of Trace tab: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/Features/Trace.md
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer()(history),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSagaTask = () => {
    const rootSaga = require('./sagas/rootSaga').default;

    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  store.runSagaTask();

  store.injectedReducers = {}; // Reducer registry


  return store;
}
