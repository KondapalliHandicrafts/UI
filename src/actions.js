import { createAction } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  CARDS_REQUEST,
  TOGGLE_DIALOG,
  LOGOUT_REQUEST,
  FORGOTPASSWORD_SUCCESS,
  CARDS_DATA,
  ADD_ADDRESS_REQUEST,
  EDIT_ADDRESS_REQUEST,
  DELETE_ADDRESS_REQUEST,
  DEFAULT_ADDRESS_REQUEST,
  CURRENT_PASSWORD_SUCCESS,
  SUBMIT_PROFILE_REQUEST,
  RESETID_SUCCESS,
  CART_REQUEST,
  CART_SUCCESS,
  RESETPASSWORD_SUCCESS,
  CHANGE_PROFILE_PIC_REQUEST,
  PROFILE_SUCCESS,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  CURRENT_PASSWORD_REQUEST,
  ADMIN_CARDS_DATA,
  VERIFY_RESETID_REQUEST,
  REGISTER_USER_REQUEST,
  ADD_WISHLIST_REQUEST,
  LOADER,
  ADD_TO_CART_REQUEST,
  CHANGE_PASSWORD_UNMOUNT,
  CARD_DETAILS_REQUEST,
  CARD_DETAILS_SUCCESS,
  CARDS_UNMOUNT,
  WISHLIST_SUCCESS,
  ADD_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  WISHLIST_REQUEST,
  UPDATE_HEADER_PIC,
  DELETE_CART_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  UPDATE_CART_REQUEST,
  FORGOT_PASSWORD_UNMOUNT,
  UPDATE_CART_COUNT,
  USER_DETAILS_REQUEST,
  EDIT_CARD_REQUEST,
  MOVE_TO_WISHLIST
} from '__GLOBAL__/constants';

export const loginSuccessful = createAction(LOGIN_SUCCESS, 'data');
export const loginRequest = createAction(LOGIN_REQUEST, 'values');
export const logoutRequest = createAction(LOGOUT_REQUEST, 'history');
export const unmount = createAction(UNMOUNT);
export const forgotPasswordSuccess = createAction(
  FORGOTPASSWORD_SUCCESS,
  'data'
);
export const cardsLoaded = createAction(CARDS_DATA, 'data');
export const adminCardsSuccess = createAction(ADMIN_CARDS_DATA, 'data');
export const updateCartCount = createAction(UPDATE_CART_COUNT, 'data');
export const updateHeaderPic = createAction(UPDATE_HEADER_PIC, 'data');
export const toggleDialog = createAction(TOGGLE_DIALOG, 'mode', 'data');
export const checkResetIDSunccess = createAction(RESETID_SUCCESS, 'data');
export const resetPasswordSuccess = createAction(RESETPASSWORD_SUCCESS, 'data');
export const profileSuccess = createAction(PROFILE_SUCCESS, 'data');
export const checkCurrentPasswordSuccess = createAction(
  CURRENT_PASSWORD_SUCCESS,
  'message',
  'status'
);
export const getCardsData = createAction(CARDS_REQUEST, 'isAdmin');
export const getUserDetailsRequest = createAction(USER_DETAILS_REQUEST);
export const addToCartRequest = createAction(
  ADD_TO_CART_REQUEST,
  'id',
  'size',
  'cType'
);
export const checkCurPasswordRequest = createAction(
  CURRENT_PASSWORD_REQUEST,
  'value'
);
export const addCardRequest = createAction(ADD_CARD_REQUEST, 'data', 'isAdmin');
export const updateCartRequest = createAction(
  UPDATE_CART_REQUEST,
  'id',
  'value',
  'size'
);
export const editCardRequest = createAction(
  EDIT_CARD_REQUEST,
  'data',
  'isAdmin'
);
export const deleteCardRequest = createAction(
  DELETE_CARD_REQUEST,
  'id',
  'isAdmin'
);
export const addAddressRequest = createAction(ADD_ADDRESS_REQUEST, 'data');
export const editAddressRequest = createAction(EDIT_ADDRESS_REQUEST, 'data');
export const deleteAddressRequest = createAction(DELETE_ADDRESS_REQUEST, 'id');
export const moveToWishlistRequest = createAction(
  MOVE_TO_WISHLIST,
  'id',
  'size'
);
export const getCardDetails = createAction(CARD_DETAILS_REQUEST, 'id');
export const getCardDetailsSuccess = createAction(CARD_DETAILS_SUCCESS, 'data');
export const addToWishlistRequest = createAction(
  ADD_WISHLIST_REQUEST,
  'id',
  'size',
  'apiType'
);
export const getWishlistDataRequest = createAction(WISHLIST_REQUEST);
export const deleteCartRequest = createAction(DELETE_CART_REQUEST, 'id');
export const getCartItemsRequest = createAction(CART_REQUEST);
export const getCartItemsSuccess = createAction(CART_SUCCESS, 'data');
export const getWishlistSuccess = createAction(WISHLIST_SUCCESS, 'data');
export const commonLoader = createAction(LOADER, 'value');
export const cardsUnmount = createAction(CARDS_UNMOUNT);
export const changePasswordUnmount = createAction(CHANGE_PASSWORD_UNMOUNT);
export const forgotPasswordUnmount = createAction(FORGOT_PASSWORD_UNMOUNT);
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
export const changeProfilePicRequest = createAction(
  CHANGE_PROFILE_PIC_REQUEST,
  'file'
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
