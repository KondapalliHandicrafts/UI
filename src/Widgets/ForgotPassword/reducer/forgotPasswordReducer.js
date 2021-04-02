import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  FORGOTPASSWORD_LOADER,
  FORGOTPASSWORD_SUCCESS
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: true,
  message: null
};

const forgotPasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [FORGOTPASSWORD_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [FORGOTPASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    dataLoaded: true,
    message: action.data.message
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: [],
    message: null
  })
};

export default createReducer(defaultState, forgotPasswordReducer);
