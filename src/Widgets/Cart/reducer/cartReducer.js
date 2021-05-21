import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, CART_LOADER, CART_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const cartReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CART_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [CART_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data,
    dataLoaded: true
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, cartReducer);
