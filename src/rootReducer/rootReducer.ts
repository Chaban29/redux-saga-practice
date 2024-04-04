import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { usersReducer } from '../reducers/usersReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
