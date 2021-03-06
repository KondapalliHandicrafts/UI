import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, LOGIN_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  token: null,
  isAdmin: false,
  dataLoaded: false,
  isLoggedIn: false
};

const loginReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isLoggedIn: true,
    isAdmin: action.data.isAdmin,
    token: action.data.token
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: [],
    token: null
  })
};

export default createReducer(defaultState, loginReducer);
