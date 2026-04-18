import { createSlice } from "@reduxjs/toolkit";
import { set } from "mongoose";

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: { value: false},
    reducers: {
        toggle: (state) => ({ value: !state.value }),
        setDarkMode: () => ({ value: true }),
        setLightMode: () => ({ value: false }),
    }
})

export const { toggle, setDarkMode, setLightMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;