import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  FORGOTPASSWORD_SUCCESS,
  FORGOT_PASSWORD_UNMOUNT
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  message: null
};

const forgotPasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [FORGOTPASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    message: action.data.message
  }),
  [FORGOT_PASSWORD_UNMOUNT]: state => ({
    ...state,
    message: null
  })
};

export default createReducer(defaultState, forgotPasswordReducer);
