import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { postCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {
  curPasswordmessage: null,
  curPasswordStatus: -1
};

export const changePassword = createAsyncThunk(
  'changePassword/changePassword',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/changePassword',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const checkCurrentPassword = createAsyncThunk(
  'changePassword/checkCurrentPassword',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/checkCurrentPassword',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.curPasswordStatus = initialState.curPasswordStatus;
      state.curPasswordmessage = initialState.curPasswordmessage;
    });
  }
});

// export const { } =changePasswordSlice.actions;

export default changePasswordSlice.reducer;
