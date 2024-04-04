import { Reducer, applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../rootReducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer as Reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootWatcher);
