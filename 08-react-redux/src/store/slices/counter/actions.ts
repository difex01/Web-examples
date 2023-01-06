import { actionDecrementCounter, actionIncrementCounter, counterActionType } from "./reducers";

// Creadores de acciones

export const incrementCounter = (payload: number): actionIncrementCounter => {
  return {
    type: counterActionType.INCREMENT,
    value: payload
  }
}

export const decrementCounter = (payload: number): actionDecrementCounter => {
  return {
    type: counterActionType.DECREMENT,
    value: payload
  }
}
