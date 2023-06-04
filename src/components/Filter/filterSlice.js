import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilerChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    },
});

export const { searchFilerChange, statusFilterChange, priorityFilterChange } =
    filterSlice.actions;

export default filterSlice.reducer;
