import { put, takeEvery } from 'redux-saga/effects';
import {
  decreaseCounterAction,
  increaseCounterAction,
} from '../reducers/counterReducer';
import { CounterActions } from '../types/counter-types';

export const delay = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export function* incrementWorker() {
  yield delay(1000);
  yield put(increaseCounterAction(100));
}

export function* countWatcher() {
  yield takeEvery(CounterActions.ASYNCINCREMENT, incrementWorker);
  yield takeEvery(CounterActions.ASYNCDECREMENT, decrementWorker);
}

export function* decrementWorker() {
  yield delay(1000);
  yield put(decreaseCounterAction(80));
}
