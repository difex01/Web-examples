import { createSlice } from '@reduxjs/toolkit';
import reducers, { todosStateI } from './reducers';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: <todosStateI>{
    list: []
  },
  reducers,
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
