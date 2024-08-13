import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getCall, putCall } from '../../Global/webAPI';
import { commonLoader } from '../Routing/routingSlice';
import { getCardsData } from '../Home/homeSlice';

const initialState = {
  data: []
};

export const getWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async (x, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await getCall({
      url: `/user/wishlist`
    });
    dispatch(commonLoader(false));
    return response.data;
  }
);

export const addWishlist = createAsyncThunk(
  'wishlist/addWishlist',
  async ({ values, apiType }, { dispatch }) => {
    dispatch(commonLoader(true));
    const response = await putCall({
      url: `/user/wishlist/${values.id}`
    });
    if (apiType === 2) dispatch(getWishlist());
    else dispatch(getCardsData());
    return response.data;
  }
);

export const wishlistSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      state.data = initialState.data;
    });
  }
});

// export const { } =wishlistSlice.actions;

export default wishlistSlice.reducer;
