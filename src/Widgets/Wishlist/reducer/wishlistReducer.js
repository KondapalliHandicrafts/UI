import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { WISHLIST_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: []
};

const wishlistReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [WISHLIST_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data
  })
};

export default createReducer(defaultState, wishlistReducer);
