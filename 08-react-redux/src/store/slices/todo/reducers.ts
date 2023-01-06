export interface todoStateI {
  title: string,
  completed: boolean,
}

const initialState: todoStateI[] = [];

export enum todoActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface actionAddTodo {
  type: todoActionType.ADD_TODO,
  title: string
}

export interface actionToggleTodo {
  type: todoActionType.TOGGLE_TODO,
  index: number
}

export type todoActionsI = actionAddTodo | actionToggleTodo; 

function todoReducer(state = initialState, action: todoActionsI): todoStateI[] {
  switch (action.type) {
    case todoActionType.ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          completed: false,
        }
      ]
    case todoActionType.TOGGLE_TODO:
      return state.map((todo, index) => action.index === index ?
        { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

export default todoReducer
