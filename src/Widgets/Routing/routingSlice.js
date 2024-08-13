import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  dataLoading: false,
  isSnackbar: false,
  snackbarMessage: ''
};

export const routingSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    commonLoader: (state, action) => {
      state.dataLoading = action.payload;
    },
    commonSnackbar: (state, action) => {
      state.isSnackbar = !state.isSnackbar;
      state.snackbarMessage = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.dataLoading = initialState.dataLoading;
      state.isSnackbar = initialState.isSnackbar;
      state.snackbarMessage = initialState.snackbarMessage;
    });
  }
});

export const { commonLoader, commonSnackbar } = routingSlice.actions;

export default routingSlice.reducer;
