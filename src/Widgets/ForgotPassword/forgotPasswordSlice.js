import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { postCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {
  message: null
};

export const forgotPassword = createAsyncThunk(
  'forgotPassword/forgotPassword',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/forgotPassword',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  extraReducers: builder => {
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isAdmin = action.payload.isAdmin;
      state.token = action.payload.token;
    });
    builder.addCase(PURGE, state => {
      state.token = initialState.token;
      state.isAdmin = initialState.isAdmin;
      state.isLoggedIn = initialState.isLoggedIn;
    });
  }
});

// export const { } =forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
