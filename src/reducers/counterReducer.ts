import {
  CounterActions,
  ICounter,
  TypeCounterActions,
} from '../types/counter-types';

export const initialState: ICounter = { count: 0 };

export const counterReducer = (
  state = initialState,
  action: TypeCounterActions
) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export const increaseCounterAction = (payload: number) => ({
  type: CounterActions.INCREMENT,
  payload,
});

export const decreaseCounterAction = (payload: number) => ({
  type: CounterActions.DECREMENT,
  payload,
});

export const asyncIncrementCounterAction = () => ({
  type: CounterActions.ASYNCINCREMENT,
});

export const asyncDecrementCounterAction = () => ({
  type: CounterActions.ASYNCDECREMENT,
});
