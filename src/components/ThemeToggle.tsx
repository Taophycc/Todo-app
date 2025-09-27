import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button 
      onClick={handleToggle} 
      className="p-1 hover:scale-110 transition-transform duration-200 focus:outline-none"
    >
      {currentTheme === "light" ? (
        <img src="/images/icon-moon.svg" alt="Switch to dark mode" className="w-6 h-6" />
      ) : (
        <img src="/images/icon-sun.svg" alt="Switch to light mode" className="w-6 h-6" />
      )}
    </button>
  );
};
