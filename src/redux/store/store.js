// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import fontSizeReducer from '../root/FontScale';
import darkModeReducer from '../root/DarkMode';


const store = configureStore({
    reducer: {
        fontSize: fontSizeReducer,
        mode: darkModeReducer,
    },
});

export default store;
