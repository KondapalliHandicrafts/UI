import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, ORDERS_LOADER } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const ordersReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [ORDERS_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, ordersReducer);
