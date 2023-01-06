import { combineReducers } from 'redux';
import counterReducer, { counterState } from './counter/reducers';
import todoReducer, { todoStateI } from './todo/reducers'

export interface StateI {
  todos: todoStateI[],
  counter: counterState,
}

const reducers = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});


/*

import counterReducer, { counterActionsI, counterState } from './counter/reducers';
import todoReducer, { todoActionsI, todoStateI } from './todo/reducers'

export interface StateI {
  todos: todoStateI[],
  counter: counterState,
}

type Action = todoActionsI | counterActionsI;

const initialState = {
  todos: [],
  counter: 0,
}

function reducers(state: StateI = initialState, action: Action) {
  return {
    todos: todoReducer(state.todos, action as todoActionsI),
    counter: counterReducer(state.counter, action as counterActionsI),
  }
}


*/

export default reducers;
