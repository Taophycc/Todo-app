import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Filter } from "../types/todo";

interface TodoState {
  todos: Todo[];
  counter: number;
  filter: Filter;
}

const initialState: TodoState = {
  todos: [{ id: 1, text: "Learn Redux", completed: false }],
  counter: 2,
  filter: "All",
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    AddTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.todos.push({
        id: state.counter,
        text: action.payload.text,
        completed: false,
      });
      state.counter++; //
    },
    ToggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      let todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DeleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    FilterTodos: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    ClearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const selectFilteredTodos = (state: any) => {
  const todos = state.todo.todos;
  const filter = state.todo.filter;

  if (filter === "Completed") {
    return todos.filter((todo: Todo) => todo.completed);
  } else if (filter === "Active") {
    return todos.filter((todo: Todo) => !todo.completed);
  } else {
    return todos;
  }
};

export const selectActiveTodoCount = (state: any) =>
  state.todo.todos.filter((todo: Todo) => !todo.completed).length;

export const { AddTodo, ToggleTodo, DeleteTodo, FilterTodos, ClearCompleted } =
  TodoSlice.actions;
