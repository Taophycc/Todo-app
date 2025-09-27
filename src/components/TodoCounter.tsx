import { useSelector } from "react-redux";
import { selectActiveTodoCount } from "../store/todo";

export function TodoCounter() {
  const activeTodos = useSelector(selectActiveTodoCount);

  return (
    <span className="text-sm text-dark-grayish-blue dark:text-dark-grayish-blue-dark">
      {activeTodos} {activeTodos === 1 ? 'item' : 'items'} left
    </span>
  );
}
