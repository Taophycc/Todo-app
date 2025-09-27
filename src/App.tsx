import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FilterTodo } from "./components/FilterTodo";
import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { TodoInput } from "./components/TodoInput";
import { ThemeToggle } from "./components/ThemeToggle";
import { RootState } from "./store/store";
import { ClearCompleted } from "./store/todo";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  useEffect(() => {
    // Apply dark class to html element for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply initial theme on mount
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleClearCompleted = () => {
    dispatch(ClearCompleted());
  };

  return (
    <div className="min-h-screen bg-very-light-gray dark:bg-very-dark-blue font-josefin transition-colors duration-300 flex flex-col">
      {/* Background Header */}
      <div className={`relative w-full h-[200px] md:h-[300px] bg-cover bg-center ${theme === 'dark' ? 'bg-header-dark' : 'bg-header-light'}`}>
        <div className="w-full max-w-xl lg:max-w-2xl mx-auto px-6 pt-12 md:pt-16">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-[0.4em]">TODO</h1>
            <ThemeToggle />
          </div>

          {/* Todo Input */}
          <TodoInput />
        </div>
      </div>

      {/* Main Content - Centered on Desktop */}
      <main className="flex-1 flex justify-center items-start pt-0 px-4">
        <div className="w-full max-w-xl lg:max-w-2xl px-6 -mt-16 md:-mt-20 min-h-0">
          <div className="bg-white dark:bg-very-dark-desaturated-blue rounded-lg shadow-2xl overflow-hidden">
            <TodoList />
            
            {/* Footer */}
            <div className="flex justify-between items-center p-4 md:p-6 text-sm text-dark-grayish-blue dark:text-dark-grayish-blue-dark border-t border-light-grayish-blue dark:border-very-dark-grayish-blue-darker">
              <TodoCounter />
              <div className="hidden md:block">
                <FilterTodo />
              </div>
              <button 
                onClick={handleClearCompleted}
                className="hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-dark transition-colors duration-200"
              >
                Clear Completed
              </button>
            </div>
          </div>

          {/* Mobile Filter */}
          <div className="md:hidden mt-4 bg-white dark:bg-very-dark-desaturated-blue rounded-lg shadow-xl p-4 flex justify-center">
            <FilterTodo />
          </div>

          {/* Footer Text */}
          <p className="text-center text-dark-grayish-blue dark:text-dark-grayish-blue-dark mt-12 mb-8 text-sm">
            Drag and drop to reorder list
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
