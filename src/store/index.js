import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import loginR from './reducers/login';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    loginR
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
