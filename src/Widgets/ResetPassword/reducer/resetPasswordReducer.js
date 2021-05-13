import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  RESETPASSWORD_LOADER,
  RESETPASSWORD_SUCCESS,
  RESETID_SUCCESS
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  userdata: null,
  showSuccessMessage: false,
  dataLoaded: false
};

const resetPasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [RESETPASSWORD_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [RESETID_SUCCESS]: (state, action) => ({
    ...state,
    userdata: action.data,
    dataLoaded: true
  }),
  [RESETPASSWORD_SUCCESS]: state => ({
    ...state,
    dataLoaded: true,
    showSuccessMessage: true,
    userdata: null
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, resetPasswordReducer);
