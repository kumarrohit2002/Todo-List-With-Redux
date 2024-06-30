import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './slicer/TodoSlice';

export const store = configureStore({
    reducer: todoReducer,
})