export type counterState = number;

const incrementCounter = (state: counterState, action: { payload: number }) => {
  return state + action.payload
}

const decrementCounter = (state: counterState, action: { payload: number }) => {
  return state - action.payload;
}


export default {
  incrementCounter,
  decrementCounter,
}
