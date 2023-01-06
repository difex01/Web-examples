import { actionAddTodo, actionToggleTodo, todoActionType } from "./reducers";

// Creadores de acciones

export const addTodo = (payload: string): actionAddTodo => {
  return {
    type: todoActionType.ADD_TODO,
    title: payload
  }
}

export const toggleTodo = (payload: number): actionToggleTodo => {
  return {
    type: todoActionType.TOGGLE_TODO,
    index: payload
  }
}
