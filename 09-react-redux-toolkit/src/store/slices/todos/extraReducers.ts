import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { todosStateI } from "./reducers";

export const getTodosData = createAsyncThunk(
  "todos/getTodosData",
  async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
  
    return data.title;
  }
)

const getTodosDataReducer = (builder: ActionReducerMapBuilder<todosStateI>) => {
  builder
    .addCase(getTodosData.pending, (state, action) => {
      // Code when loading
    })
    .addCase(getTodosData.fulfilled, (state, action) => {
      // Code when data comes successfully
      state.list = [{title: action.payload, completed: false}];
    })
    .addCase(getTodosData.rejected, (state, action) => {
      // Code if it fails
    })
}

export const extraReducers = (builder: ActionReducerMapBuilder<todosStateI>) => {
  getTodosDataReducer(builder);
}
