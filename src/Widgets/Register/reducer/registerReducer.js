import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, REGISTER_LOADER } from '../_helpers/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const registerReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [REGISTER_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, registerReducer);
