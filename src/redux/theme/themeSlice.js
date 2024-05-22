import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("currentTheme"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.value = "dark";
      localStorage.setItem("currentTheme", "dark");
    },
    setLightTheme: (state) => {
      state.value = "light";
      localStorage.setItem("currentTheme", "light");
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
