import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("mode")
      ? JSON.parse(localStorage.getItem("mode"))
      : false,
  },
  reducers: {
    activeTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", JSON.stringify(action.payload));
    },
    currentTheme: (state) => {
      state.mode = false;
      localStorage.removeItem("mode");
    },
  },
});

export const { activeTheme, currentTheme } = themeSlice.actions;
export default themeSlice.reducer;
