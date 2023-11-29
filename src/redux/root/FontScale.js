// src/features/fontSizeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const fontSizeSlice = createSlice({
    name: 'fontSize',
    initialState: {
        value: 17,
    },
    reducers: {
        setFontSize: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
