export interface todosStateI {
  list: todosListItemI[],
}

export interface todosListItemI {
  title: string,
  completed: boolean,
}

const addTodo = (state: todosStateI, action: { payload: string }) => {
  state.list.push({
    title: action.payload,
    completed: false,
  })
}

const toggleTodo = (state: todosStateI, action: { payload: number }) => {
  const todo = state.list.find((_, index) => action.payload === index)
  if (todo) {
    todo.completed = !todo.completed;
  }
}

export default {
  addTodo,
  toggleTodo,
}
