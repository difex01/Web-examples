import { createSlice } from '@reduxjs/toolkit';
import reducers, { todosStateI } from './reducers';
import { extraReducers } from './extraReducers';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: <todosStateI>{
    list: []
  },
  reducers,
  extraReducers,
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
