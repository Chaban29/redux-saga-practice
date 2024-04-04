import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './rootReducer/rootReducer';
import {
  asyncDecrementCounterAction,
  asyncIncrementCounterAction,
} from './reducers/counterReducer';

export const App: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.count);

  const handleIncrementAsync = () => {
    dispatch(asyncIncrementCounterAction());
  };

  const handleDecremenetAsync = () => {
    if (!counter) return;
    dispatch(asyncDecrementCounterAction());
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={handleIncrementAsync}>increase async</button>
      <button onClick={handleDecremenetAsync}>decrease async</button>
    </div>
  );
};
