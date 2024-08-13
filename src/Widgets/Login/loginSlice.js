import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getCall, postCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {
  token: null,
  isAdmin: false,
  isLoggedIn: false
};

export const userLogin = createAsyncThunk(
  'login/userLogin',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/login',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const userLogout = createAsyncThunk(
  'login/userLogout',
  async (x, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await getCall({
      url: '/user/logout'
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: builder => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
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

// export const { } =loginSlice.actions;

export default loginSlice.reducer;
