export interface ICounter {
  count: number;
}

export const enum CounterActions {
  INCREMENT = 'counter/increment',
  DECREMENT = 'counter/decrement',
  ASYNCINCREMENT = 'counter/asyncIncrement',
  ASYNCDECREMENT = 'counter/asyncDecrement',
}

export type TypeCounterActions =
  | { type: CounterActions.INCREMENT; payload: number }
  | { type: CounterActions.DECREMENT; payload: number }
  | { type: CounterActions.ASYNCINCREMENT }
  | { type: CounterActions.ASYNCDECREMENT };
