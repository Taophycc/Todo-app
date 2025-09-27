import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  currentTheme: "light" | "dark";
}

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  }
  return "light";
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.currentTheme);
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
