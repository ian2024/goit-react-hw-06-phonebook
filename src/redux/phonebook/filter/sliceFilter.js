import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterAction: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { filterAction } = filterSlice.actions;
export default filterSlice.reducer;