import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  LOGIN_SUCCESS,
  UPDATE_HEADER_PIC,
  UPDATE_CART_COUNT
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  token: null,
  isAdmin: false,
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
  [UPDATE_CART_COUNT]: (state, action) => ({
    ...state,
    cartCount: action.data.cartCount
  })
};

export default createReducer(defaultState, loginReducer);
