import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';

const defaultState = {
  data: []
};

const ordersReducer = {
  [PURGE]: () => {
    return defaultState;
  }
};

export default createReducer(defaultState, ordersReducer);
