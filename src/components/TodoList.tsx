import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../store/todo";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/todo";

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul className="list-none">
      {todos.length === 0 ? (
        <li className="p-6 text-center text-dark-grayish-blue dark:text-dark-grayish-blue-dark">
          No todos yet. Create one above!
        </li>
      ) : (
        todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </ul>
  );
};
