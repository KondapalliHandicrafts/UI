import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  LOGIN_SUCCESS,
  UPDATE_HEADER_PIC
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  token: null,
  isAdmin: false,
  dataLoaded: false,
  isLoggedIn: false,
  cartCount: 0,
  profilePic: null
};

const loginReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isLoggedIn: true,
    isAdmin: action.data.isAdmin,
    token: action.data.token,
    cartCount: action.data.cartCount,
    profilePic: action.data.profilePic
  }),
  [UPDATE_HEADER_PIC]: (state, action) => ({
    ...state,
    profilePic: action.data.profilePic || state.profilePic
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: [],
    token: null
  })
};

export default createReducer(defaultState, loginReducer);
