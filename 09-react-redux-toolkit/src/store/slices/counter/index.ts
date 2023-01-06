import { createSlice } from '@reduxjs/toolkit';
import reducers, { counterState } from './reducers';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: <counterState> 0,
  reducers,
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
