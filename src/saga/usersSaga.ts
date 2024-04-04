import { put, takeEvery, call } from 'redux-saga/effects';
import { setUsersAction } from '../reducers/usersReducer';
import { UsersActions } from '../types/users-types';

export const fetchUsersFromServer = (): Promise<any> =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=10').then(
    (response) => response.json()
  );

export function* fetchUsersWorker(): Generator<any, void, any> {
  try {
    const data = yield call(fetchUsersFromServer);
    yield put(setUsersAction(data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export function* fetchUsersWatcher(): Generator<any, void, any> {
  yield takeEvery(UsersActions.GETUSERS, fetchUsersWorker);
}
