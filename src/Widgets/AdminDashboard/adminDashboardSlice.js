import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  data: []
};

export const adminDashboardSlice = createSlice({
  name: 'adminDashboard',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.data = initialState.data;
    });
  }
});

// export const { } =adminDashboardSlice.actions;

export default adminDashboardSlice.reducer;
