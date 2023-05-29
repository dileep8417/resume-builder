import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontSize: parseInt(localStorage.getItem('fontSize')) || 11,
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState: initialState,
    reducers: {
        updateFontSize: (state, action) => {
            state.fontSize = action.payload;
        }
    }
});

export const resumeReducer = resumeSlice.reducer;

export const {updateFontSize} = resumeSlice.actions;