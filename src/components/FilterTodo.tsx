import { useDispatch, useSelector } from "react-redux";
import { FilterTodos } from "../store/todo";
import { Filter } from "../types/todo";
import { RootState } from "../store/store";

export function FilterTodo() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todo.filter);

  const handleFilterClick = (filter: Filter) => {
    dispatch(FilterTodos(filter));
  };

  return (
    <div className="flex gap-4">
      <button 
        onClick={() => handleFilterClick("All")} 
        className={`px-1 py-1 text-sm font-bold transition-colors duration-200 hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-dark ${
          currentFilter === "All" 
            ? "text-bright-blue" 
            : "text-dark-grayish-blue dark:text-dark-grayish-blue-dark"
        }`}
      >
        All
      </button>
      <button 
        onClick={() => handleFilterClick("Active")} 
        className={`px-1 py-1 text-sm font-bold transition-colors duration-200 hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-dark ${
          currentFilter === "Active" 
            ? "text-bright-blue" 
            : "text-dark-grayish-blue dark:text-dark-grayish-blue-dark"
        }`}
      >
        Active
      </button>
      <button 
        onClick={() => handleFilterClick("Completed")} 
        className={`px-1 py-1 text-sm font-bold transition-colors duration-200 hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-dark ${
          currentFilter === "Completed" 
            ? "text-bright-blue" 
            : "text-dark-grayish-blue dark:text-dark-grayish-blue-dark"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
