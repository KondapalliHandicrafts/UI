import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { CART_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: []
};

const cartReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CART_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data
  })
};

export default createReducer(defaultState, cartReducer);
