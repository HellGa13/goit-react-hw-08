import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const slice = createSlice({
    name: 'filters',
    initialState, // Правильний спосіб задати початковий стан
    
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;