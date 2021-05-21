import { postCall, getCall, deleteCall, putCall } from '__GLOBAL__/webAPI';
import { call, put } from 'redux-saga/effects';
import { renderSnackbar } from '__GLOBAL__/helpers';
import { paths } from '__GLOBAL__/constants';
import { persistor } from './store';
import {
  loginSuccessful,
  forgotPasswordLoader,
  forgotPasswordSuccess,
  cardsLoaded,
  resetPasswordLoader,
  updateHeaderPic,
  homeLoader,
  resetPasswordSuccess,
  getWishlistSuccess,
  cartLoader,
  getCartItemsSuccess,
  getWishlistDataRequest,
  updateCartCount,
  wishlistLoader,
  registerLoader,
  adminDashboardLoader,
  getCardsData,
  getUserDetailsRequest,
  checkCurrentPasswordSuccess,
  checkResetIDSunccess,
  changePasswordLoader,
  profileLoader,
  getCartItemsRequest,
  profileSuccess
} from './actions';

export function* login(action) {
  try {
    const res = yield call(postCall, {
      url: '/user/login',
      inputs: action.values
    });
    yield put(loginSuccessful(res.data));
  } catch (error) {
    renderSnackbar({ data: { message: error.message, status: -1 } });
  }
}

export function* logout(action) {
  try {
    yield call(getCall, { url: '/user/logout' });
    persistor.purge();
    action.history.push(paths.login);
  } catch (error) {
    renderSnackbar({ data: { message: error.message, status: -1 } });
  }
}

export function* forgotPassword(action) {
  yield put(forgotPasswordLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user/forgotPassword',
      inputs: action.values
    });
    yield put(forgotPasswordSuccess(res.data));
  } catch (err) {
    yield put(forgotPasswordLoader(true));
  }
}

export function* fetchCards() {
  try {
    const res = yield call(getCall, { url: '/cards' });
    yield put(cardsLoaded(res.data));
  } catch (err) {
    yield put(homeLoader(true));
  }
}

export function* registerUser(action) {
  yield put(registerLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user',
      inputs: action.values,
      showSnack: true
    });
    if (res) action.history.push(paths.login);
  } catch (err) {
    yield put(registerLoader(true));
  }
}

export function* checkResetID(action) {
  try {
    const res = yield call(postCall, {
      url: '/user/checkResetId',
      inputs: { resetId: action.resetId }
    });
    if (res) {
      yield put(checkResetIDSunccess(res.data));
    }
  } catch (err) {
    yield put(resetPasswordLoader(true));
  }
}

export function* resetPassword(action) {
  yield put(resetPasswordLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user/resetPassword',
      inputs: {
        resetId: action.resetId,
        password: action.values.password,
        secAns1: action.values.secAns1,
        secAns2: action.values.secAns2
      },
      showSnack: true
    });
    if (res) {
      yield put(resetPasswordSuccess(res.data));
    }
  } catch (err) {
    yield put(resetPasswordLoader(true));
  }
}

export function* changePassword(action) {
  yield put(changePasswordLoader(false));
  try {
    yield call(postCall, {
      url: '/user/changePassword',
      inputs: {
        curPassword: action.data.curPassword,
        password: action.data.password
      },
      showSnack: true
    });
  } catch (err) {
    yield put(changePasswordLoader(true));
  }
}

export function* checkCurrentPassword(action) {
  yield put(changePasswordLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user/checkCurrentPassword',
      inputs: {
        password: action.value
      }
    });
    yield put(checkCurrentPasswordSuccess(res.data.message, res.data.status));
  } catch (err) {
    yield put(changePasswordLoader(true));
  }
}

export function* addNewCard(action) {
  yield put(adminDashboardLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/card',
      inputs: action.data,
      showSnack: true
    });
    if (res) yield put(getCardsData());
    else yield put(adminDashboardLoader(true));
  } catch (err) {
    yield put(adminDashboardLoader(true));
  }
}

export function* editCard(action) {
  yield put(adminDashboardLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/card/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    if (res) yield put(getCardsData());
    else yield put(adminDashboardLoader(true));
  } catch (err) {
    yield put(adminDashboardLoader(true));
  }
}

export function* deleteCard(action) {
  yield put(adminDashboardLoader(false));
  try {
    const res = yield call(deleteCall, {
      url: `/card/${action.id}`,
      showSnack: true
    });
    if (res) yield put(getCardsData());
    else yield put(adminDashboardLoader(true));
  } catch (err) {
    yield put(adminDashboardLoader(true));
  }
}

export function* getUserDetails() {
  yield put(profileLoader(false));
  try {
    const res = yield call(getCall, {
      url: '/user'
    });
    yield put(profileLoader(true));
    if (res) yield put(profileSuccess(res.data));
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* changeProfilePic(file) {
  const data = new FormData();
  data.append('file', file.file[0]);
  try {
    const res = yield call(postCall, {
      url: `/user/profilePic`,
      inputs: data,
      showSnack: true
    });
    yield put(updateHeaderPic(res.data));
  } catch (err) {
    yield put(updateHeaderPic({ data: {} }));
  }
}

export function* submitProfile(action) {
  yield put(profileLoader(false));
  try {
    yield call(putCall, {
      url: `/user/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* addAddress(action) {
  yield put(profileLoader(false));
  try {
    yield call(postCall, {
      url: '/user/address',
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* editAddress(action) {
  yield put(profileLoader(false));
  try {
    yield call(putCall, {
      url: `/user/address/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* deleteAddress(action) {
  yield put(profileLoader(false));
  try {
    yield call(deleteCall, {
      url: `/user/address/${action.id}`,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* defaultAddress(action) {
  yield put(profileLoader(false));
  try {
    yield call(putCall, {
      url: `/user/address/default/${action.id}`,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(profileLoader(true));
  }
}

export function* addWishlist(action) {
  try {
    yield call(putCall, {
      url: `/user/wishlist/${action.id}`,
      showSnack: true
    });
    if (action.apiType === 2) yield put(getWishlistDataRequest());
    else yield put(getCardsData());
  } catch (err) {
    if (action.apiType === 2) yield put(wishlistLoader(true));
    else yield put(homeLoader(true));
  }
}

export function* getWishlist() {
  yield put(wishlistLoader(false));
  try {
    const res = yield call(getCall, {
      url: `/user/wishlist`
    });
    yield put(getWishlistSuccess(res.data));
  } catch (err) {
    yield put(wishlistLoader(true));
  }
}

export function* addToCart(action) {
  if (action.cType === 2) yield put(wishlistLoader(false));
  yield put(homeLoader(false));
  try {
    const res = yield call(postCall, {
      url: `/cart`,
      inputs: { cardId: action.id },
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (action.cType === 2) yield put(getWishlistDataRequest());
    yield put(homeLoader(true));
  } catch (err) {
    if (action.cType === 2) yield put(wishlistLoader(true));
    yield put(homeLoader(true));
  }
}

export function* getCartItems(action) {
  yield put(cartLoader(false));
  try {
    const res = yield call(getCall, {
      url: `/cart`,
      inputs: { cardId: action.id },
      showSnack: true
    });
    if (res) yield put(getCartItemsSuccess(res.data));
  } catch (err) {
    yield put(cartLoader(true));
  }
}

export function* updateCart(action) {
  yield put(cartLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/cart/${action.id}`,
      showSnack: true,
      inputs: { quantity: action.value }
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(cartLoader(true));
  }
}

export function* deleteCartItem(action) {
  yield put(cartLoader(false));
  try {
    const res = yield call(deleteCall, {
      url: `/cart/${action.id}`,
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(cartLoader(true));
  }
}

export function* moveToWishlist(action) {
  yield put(cartLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/cart/wishlist/${action.id}`,
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(cartLoader(true));
  }
}
