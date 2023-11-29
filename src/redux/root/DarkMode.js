// darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';



const darkModeSlice = createSlice({
  name: 'mode',
  initialState: {
    darkMode: false,
  },
  reducers: {
    togglerDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { togglerDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
