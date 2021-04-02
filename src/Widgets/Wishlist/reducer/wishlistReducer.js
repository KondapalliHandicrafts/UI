import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  WISHLIST_LOADER,
  WISHLIST_SUCCESS
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const wishlistReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [WISHLIST_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [WISHLIST_SUCCESS]: (state, action) => ({
    ...state,
    dataLoaded: true,
    data: action.data
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, wishlistReducer);
