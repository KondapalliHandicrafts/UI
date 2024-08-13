import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { commonLoader } from '../Routing/routingSlice';
import { deleteCall, getCall, postCall, putCall } from '../../Global/webAPI';

const initialState = {
  data: []
};

export const getCardsData = createAsyncThunk(
  'home/getCardsData',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await getCall({
      url: '/cards',
      body: values
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const addNewCard = createAsyncThunk(
  'home/addNewCard',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await postCall({
      url: '/cards',
      body: values
    });
    dispatch(getCardsData());
    return response.data;
  }
);

export const editCard = createAsyncThunk(
  'home/editCard',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await putCall({
      url: `/card/${values.id}`,
      body: values
    });
    dispatch(getCardsData());
    return response.data;
  }
);

export const deleteCard = createAsyncThunk(
  'home/deleteCard',
  async (values, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await deleteCall({
      url: `/card/${values.id}`
    });
    dispatch(getCardsData());
    return response.data;
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.data = initialState.data;
    });
  }
});

// export const { } =homeSlice.actions;

export default homeSlice.reducer;
