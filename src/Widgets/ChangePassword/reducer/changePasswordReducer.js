import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  CHANGEPASSWORD_LOADER,
  CURRENT_PASSWORD_SUCCESS
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false,
  curPasswordmessage: null,
  curPasswordStatus: -1
};

const changePasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CHANGEPASSWORD_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [CURRENT_PASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    curPasswordmessage: action.message,
    curPasswordStatus: action.status
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    curPasswordmessage: null,
    curPasswordStatus: -1,
    data: []
  })
};

export default createReducer(defaultState, changePasswordReducer);
