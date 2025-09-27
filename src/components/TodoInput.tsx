import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../store/todo";

export function TodoInput() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(AddTodo({ text: text.trim() }));
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-light-grayish-blue dark:border-very-dark-grayish-blue-darker"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full py-4 pl-16 pr-6 bg-white dark:bg-very-dark-desaturated-blue text-very-dark-grayish-blue dark:text-light-grayish-blue-dark placeholder-dark-grayish-blue dark:placeholder-dark-grayish-blue-dark rounded-lg shadow-xl border-none outline-none text-body caret-bright-blue"
        />
      </div>
    </form>
  );
}
