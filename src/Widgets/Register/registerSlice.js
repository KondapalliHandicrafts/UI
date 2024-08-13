import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { postCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {};

export const registerUser = createAsyncThunk(
  'register/userCreate',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, () => {});
  }
});

// export const { } =registerSlice.actions;

export default registerSlice.reducer;
