import { all, takeEvery } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  CARDS_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  REGISTER_USER_REQUEST,
  SUBMIT_PROFILE_REQUEST,
  VERIFY_RESETID_REQUEST,
  RESET_PASSWORD_REQUEST,
  ADD_CARD_REQUEST,
  EDIT_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  USER_DETAILS_REQUEST,
  ADD_WISHLIST_REQUEST,
  ADD_ADDRESS_REQUEST,
  EDIT_ADDRESS_REQUEST,
  WISHLIST_REQUEST,
  CURRENT_PASSWORD_REQUEST,
  DELETE_ADDRESS_REQUEST,
  DEFAULT_ADDRESS_REQUEST
} from '__GLOBAL__/constants';
import {
  login,
  logout,
  addWishlist,
  checkCurrentPassword,
  submitProfile,
  fetchCards,
  forgotPassword,
  registerUser,
  checkResetID,
  resetPassword,
  getWishlist,
  addNewCard,
  changePassword,
  editAddress,
  addAddress,
  deleteAddress,
  getUserDetails,
  editCard,
  deleteCard,
  defaultAddress
} from './ApiCalls';

export function* publicRouteSaga() {
  yield takeEvery(LOGIN_REQUEST, login);
  yield takeEvery(LOGOUT_REQUEST, logout);
  yield takeEvery(CARDS_REQUEST, fetchCards);
  yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
  yield takeEvery(VERIFY_RESETID_REQUEST, checkResetID);
  yield takeEvery(RESET_PASSWORD_REQUEST, resetPassword);
  yield takeEvery(ADD_CARD_REQUEST, addNewCard);
  yield takeEvery(EDIT_CARD_REQUEST, editCard);
  yield takeEvery(CHANGE_PASSWORD_REQUEST, changePassword);
  yield takeEvery(USER_DETAILS_REQUEST, getUserDetails);
  yield takeEvery(CURRENT_PASSWORD_REQUEST, checkCurrentPassword);
  yield takeEvery(SUBMIT_PROFILE_REQUEST, submitProfile);
  yield takeEvery(ADD_ADDRESS_REQUEST, addAddress);
  yield takeEvery(EDIT_ADDRESS_REQUEST, editAddress);
  yield takeEvery(DELETE_ADDRESS_REQUEST, deleteAddress);
  yield takeEvery(DEFAULT_ADDRESS_REQUEST, defaultAddress);
  yield takeEvery(ADD_WISHLIST_REQUEST, addWishlist);
  yield takeEvery(WISHLIST_REQUEST, getWishlist);
  yield takeEvery(DELETE_CARD_REQUEST, deleteCard);
}

export default function* rootSaga() {
  yield all([publicRouteSaga()]);
}
