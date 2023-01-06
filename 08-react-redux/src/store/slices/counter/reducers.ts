export type counterState = number;

const initialState: number = 0;

export enum counterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface actionIncrementCounter {
  type: counterActionType.INCREMENT,
  value: number,
}

export interface actionDecrementCounter {
  type: counterActionType.DECREMENT,
  value: number,
}

export type counterActionsI = actionIncrementCounter | actionDecrementCounter; 

function counterReducer(state = initialState, action: counterActionsI): counterState {
  switch (action.type) {
    case counterActionType.INCREMENT:
      return state + action.value;
    case counterActionType.DECREMENT:
      return state - action.value;
    default:
      return state;
  }
}

export default counterReducer
