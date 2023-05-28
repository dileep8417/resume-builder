import { createSlice } from '@reduxjs/toolkit';

const pageState = {
    isLoading: false,   
}

const pageSlice = createSlice({
    name: 'page',
    initialState: pageState,
    reducers: {
        updateLoadingState: (state, action) => {
            state.isLoading = action.payload || false;
        }
    }
});

export const pageReducer = pageSlice.reducer;
export const {updateLoadingState} = pageSlice.actions;