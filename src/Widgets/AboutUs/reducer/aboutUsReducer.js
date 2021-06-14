import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { ABOUTUS_UNMOUNT } from '__GLOBAL__/constants';

const defaultState = {
  data: []
};

const aboutUsReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [ABOUTUS_UNMOUNT]: state => ({
    ...state,
    data: []
  })
};

export default createReducer(defaultState, aboutUsReducer);
