import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  CURRENT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_UNMOUNT
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  curPasswordmessage: null,
  curPasswordStatus: -1
};

const changePasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CURRENT_PASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    curPasswordmessage: action.message,
    curPasswordStatus: action.status
  }),
  [CHANGE_PASSWORD_UNMOUNT]: state => ({
    ...state,
    curPasswordmessage: null,
    curPasswordStatus: -1
  })
};

export default createReducer(defaultState, changePasswordReducer);
