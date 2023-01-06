import todos from './todos';
import counter from './counter';
import { counterState } from './counter/reducers';
import { todosStateI } from './todos/reducers'

export interface StateI {
  todos: todosStateI,
  counter: counterState,
}

export default {
  todos,
  counter,
}
