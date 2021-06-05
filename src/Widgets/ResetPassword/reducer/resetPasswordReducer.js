import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { RESETPASSWORD_SUCCESS, RESETID_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  userdata: null,
  showSuccessMessage: false
};

const resetPasswordReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [RESETID_SUCCESS]: (state, action) => ({
    ...state,
    userdata: action.data
  }),
  [RESETPASSWORD_SUCCESS]: state => ({
    ...state,
    showSuccessMessage: true,
    userdata: null
  })
};

export default createReducer(defaultState, resetPasswordReducer);
