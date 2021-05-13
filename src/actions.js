import { createAction } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  CARDS_REQUEST,
  TOGGLE_DIALOG,
  LOGOUT_REQUEST,
  FORGOTPASSWORD_LOADER,
  FORGOTPASSWORD_SUCCESS,
  CARDS_DATA,
  REGISTER_LOADER,
  ADD_ADDRESS_REQUEST,
  EDIT_ADDRESS_REQUEST,
  DELETE_ADDRESS_REQUEST,
  DEFAULT_ADDRESS_REQUEST,
  CURRENT_PASSWORD_SUCCESS,
  RESETPASSWORD_LOADER,
  SUBMIT_PROFILE_REQUEST,
  RESETID_SUCCESS,
  RESETPASSWORD_SUCCESS,
  PROFILE_SUCCESS,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  CURRENT_PASSWORD_REQUEST,
  VERIFY_RESETID_REQUEST,
  REGISTER_USER_REQUEST,
  ADD_WISHLIST_REQUEST,
  WISHLIST_LOADER,
  WISHLIST_SUCCESS,
  ADD_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CHANGE_PASSWORD_LOADER,
  WISHLIST_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  PROFILE_LOADER,
  DASHBOARD_LOADER,
  USER_DETAILS_REQUEST,
  EDIT_CARD_REQUEST
} from '__GLOBAL__/constants';

export const loginSuccessful = createAction(LOGIN_SUCCESS, 'data');
export const loginRequest = createAction(LOGIN_REQUEST, 'values');
export const logoutRequest = createAction(LOGOUT_REQUEST, 'history');
export const unmount = createAction(UNMOUNT);
export const forgotPasswordLoader = createAction(
  FORGOTPASSWORD_LOADER,
  'value'
);
export const forgotPasswordSuccess = createAction(
  FORGOTPASSWORD_SUCCESS,
  'data'
);
export const cardsLoaded = createAction(CARDS_DATA, 'data');
export const toggleDialog = createAction(TOGGLE_DIALOG, 'mode', 'data');
export const resetPasswordLoader = createAction(RESETPASSWORD_LOADER, 'value');
export const checkResetIDSunccess = createAction(RESETID_SUCCESS, 'data');
export const resetPasswordSuccess = createAction(RESETPASSWORD_SUCCESS, 'data');
export const profileSuccess = createAction(PROFILE_SUCCESS, 'data');
export const registerLoader = createAction(REGISTER_LOADER, 'value');
export const registerUserSuccess = createAction(REGISTER_LOADER);
export const adminDashboardLoader = createAction(DASHBOARD_LOADER, 'value');
export const checkCurrentPasswordSuccess = createAction(
  CURRENT_PASSWORD_SUCCESS,
  'message',
  'status'
);
export const getCardsData = createAction(CARDS_REQUEST);
export const getUserDetailsRequest = createAction(USER_DETAILS_REQUEST);
export const checkCurPasswordRequest = createAction(
  CURRENT_PASSWORD_REQUEST,
  'value'
);
export const addCardRequest = createAction(ADD_CARD_REQUEST, 'data');
export const editCardRequest = createAction(EDIT_CARD_REQUEST, 'data');
export const deleteCardRequest = createAction(DELETE_CARD_REQUEST, 'id');
export const addAddressRequest = createAction(ADD_ADDRESS_REQUEST, 'data');
export const editAddressRequest = createAction(EDIT_ADDRESS_REQUEST, 'data');
export const deleteAddressRequest = createAction(DELETE_ADDRESS_REQUEST, 'id');
export const addToWishlistRequest = createAction(
  ADD_WISHLIST_REQUEST,
  'id',
  'apiType'
);
export const getWishlistDataRequest = createAction(WISHLIST_REQUEST);
export const getWishlistSuccess = createAction(WISHLIST_SUCCESS, 'data');
export const wishlistLoader = createAction(WISHLIST_LOADER, 'value');
export const defaultAddressRequest = createAction(
  DEFAULT_ADDRESS_REQUEST,
  'id'
);
export const submitProfileRequest = createAction(
  SUBMIT_PROFILE_REQUEST,
  'data'
);
export const changePasswordRequest = createAction(
  CHANGE_PASSWORD_REQUEST,
  'data'
);
export const verifyResetID = createAction(
  VERIFY_RESETID_REQUEST,
  'values',
  'resetId'
);
export const resetPasswordRequest = createAction(
  RESET_PASSWORD_REQUEST,
  'resetId'
);
export const forgotPasswordRequest = createAction(
  FORGOT_PASSWORD_REQUEST,
  'values'
);
export const registerUserRequest = createAction(
  REGISTER_USER_REQUEST,
  'values',
  'history'
);
export const changePasswordLoader = createAction(
  CHANGE_PASSWORD_LOADER,
  'value'
);
export const profileLoader = createAction(PROFILE_LOADER, 'value');
