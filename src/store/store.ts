import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./todo";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
