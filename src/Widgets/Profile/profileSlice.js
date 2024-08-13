import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { deleteCall, getCall, postCall, putCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';

const initialState = {
  data: []
};

export const getUserDetails = createAsyncThunk(
  'profile/getUserDetails',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await getCall({
      url: '/user'
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);
export const submitProfile = createAsyncThunk(
  'profile/submitProfile',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await putCall({
      url: `/user/${values.id}`,
      inputs: values
    });
    dispatch(getUserDetails());
    return response.data;
  }
);

export const addAddress = createAsyncThunk(
  'profile/addAddress',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/user/address',
      inputs: values
    });
    dispatch(getUserDetails());
    return response.data;
  }
);

export const editAddress = createAsyncThunk(
  'profile/editAddress',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await putCall({
      url: `/user/address/${values.id}`,
      inputs: values
    });
    dispatch(getUserDetails());
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  'profile/deleteAddress',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await deleteCall({
      url: `/user/address/${values.id}`,
      inputs: values
    });
    dispatch(getUserDetails());
    return response.data;
  }
);

export const defaultAddress = createAsyncThunk(
  'profile/deleteAddress',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await putCall({
      url: `/user/address/default/${values.id}`
    });
    dispatch(getUserDetails());
    return response.data;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.data = initialState.data;
    });
  }
});

// export const { } =profileSlice.actions;

export default profileSlice.reducer;
