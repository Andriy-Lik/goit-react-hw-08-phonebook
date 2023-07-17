import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
    filterActions: (_, { payload }) => payload,
  }
})

export const { filterActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;