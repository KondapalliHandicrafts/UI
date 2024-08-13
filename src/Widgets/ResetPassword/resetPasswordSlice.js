import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { postCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {
  userdata: null,
  showSuccessMessage: false
};

export const resetPassword = createAsyncThunk(
  'resetPassword/resetPassword',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/resetPassword',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const checkResetID = createAsyncThunk(
  'resetPassword/checkResetID',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/checkResetId',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  extraReducers: builder => {
    builder.addCase(resetPassword.fulfilled, (state, action) => {
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

// export const { } =resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
