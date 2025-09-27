import { useDispatch } from "react-redux";
import { ToggleTodo, DeleteTodo } from "../store/todo";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(ToggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(DeleteTodo({ id: todo.id }));
  };

  return (
    <li className="group flex items-center justify-between p-4 md:px-6 border-b border-light-grayish-blue dark:border-very-dark-grayish-blue-darker last:border-b-0">
      <div className="flex items-center flex-1 min-w-0">
        {/* Custom Checkbox */}
        <button
          onClick={handleToggle}
          className={`relative flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 transition-all duration-200 hover:border-bright-blue ${
            todo.completed
              ? 'bg-gradient-to-br from-check-start to-check-end border-transparent'
              : 'border-light-grayish-blue dark:border-very-dark-grayish-blue-darker hover:border-bright-blue'
          }`}
        >
          {todo.completed && (
            <img 
              src="/images/icon-check.svg" 
              alt="Completed" 
              className="absolute inset-0 m-auto w-3 h-3"
            />
          )}
        </button>

        {/* Todo Text */}
        <span
          onClick={handleToggle}
          className={`cursor-pointer flex-1 text-body transition-colors duration-200 ${
            todo.completed
              ? 'text-light-grayish-blue dark:text-dark-grayish-blue-dark line-through'
              : 'text-very-dark-grayish-blue dark:text-light-grayish-blue-dark hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover'
          }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Delete Button */}
      <button 
        onClick={handleDelete}
        className="opacity-0 group-hover:opacity-100 ml-4 p-1 transition-opacity duration-200 hover:scale-110"
      >
        <img 
          src="/images/icon-cross.svg" 
          alt="Delete todo" 
          className="w-4 h-4"
        />
      </button>
    </li>
  );
};
