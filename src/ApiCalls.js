import { postCall, getCall, deleteCall, putCall } from '__GLOBAL__/webAPI';
import { call, put } from 'redux-saga/effects';
import { renderSnackbar } from '__GLOBAL__/helpers';
import { paths, types } from '__GLOBAL__/constants';
import { persistor } from './store';
import {
  loginSuccessful,
  forgotPasswordSuccess,
  cardsLoaded,
  updateHeaderPic,
  commonLoader,
  resetPasswordSuccess,
  getWishlistSuccess,
  getCartItemsSuccess,
  getCardDetails,
  adminCardsSuccess,
  getWishlistDataRequest,
  updateCartCount,
  getCardsData,
  getUserDetailsRequest,
  checkCurrentPasswordSuccess,
  checkResetIDSunccess,
  getCartItemsRequest,
  getCardDetailsSuccess,
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
  yield put(commonLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user/forgotPassword',
      inputs: action.values
    });
    yield put(forgotPasswordSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* fetchCards(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(getCall, {
      url: action.isAdmin ? '/cards/admin' : '/cards'
    });
    if (!action.isAdmin) yield put(cardsLoaded(res.data));
    else yield put(adminCardsSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* registerUser(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user',
      inputs: action.values,
      showSnack: true
    });
    if (res) action.history.push(paths.login);
  } catch (err) {
    yield put(commonLoader(true));
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
      yield put(commonLoader(true));
    }
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* resetPassword(action) {
  yield put(commonLoader(false));
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
      yield put(commonLoader(true));
    }
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* changePassword(action) {
  yield put(commonLoader(false));
  try {
    yield call(postCall, {
      url: '/user/changePassword',
      inputs: {
        curPassword: action.data.curPassword,
        password: action.data.password
      },
      showSnack: true
    });
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* checkCurrentPassword(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/user/checkCurrentPassword',
      inputs: {
        password: action.value
      }
    });
    yield put(checkCurrentPasswordSuccess(res.data.message, res.data.status));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* addNewCard(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(postCall, {
      url: '/card',
      inputs: action.data,
      showSnack: true
    });
    if (res) yield put(getCardsData(action.isAdmin));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* editCard(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/card/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    if (res) yield put(getCardsData(action.isAdmin));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* deleteCard(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(deleteCall, {
      url: `/card/${action.id}`,
      showSnack: true
    });
    if (res) yield put(getCardsData(action.isAdmin));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* getUserDetails() {
  yield put(commonLoader(false));
  try {
    const res = yield call(getCall, {
      url: '/user'
    });
    if (res) yield put(profileSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
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
  yield put(commonLoader(false));
  try {
    yield call(putCall, {
      url: `/user/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* addAddress(action) {
  yield put(commonLoader(false));
  try {
    yield call(postCall, {
      url: '/user/address',
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* editAddress(action) {
  yield put(commonLoader(false));
  try {
    yield call(putCall, {
      url: `/user/address/${action.data.id}`,
      inputs: action.data,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* deleteAddress(action) {
  yield put(commonLoader(false));
  try {
    yield call(deleteCall, {
      url: `/user/address/${action.id}`,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* defaultAddress(action) {
  yield put(commonLoader(false));
  try {
    yield call(putCall, {
      url: `/user/address/default/${action.id}`,
      showSnack: true
    });
    yield put(getUserDetailsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* addWishlist(action) {
  yield put(commonLoader(false));
  try {
    yield call(putCall, {
      url: `/user/wishlist/${action.id}`,
      inputs: { size: action.size },
      showSnack: true
    });
    if (action.apiType === types.WISHLIST) yield put(getWishlistDataRequest());
    else if (action.apiType === types.HOME) yield put(getCardsData());
    else if (action.apiType === types.CARDITEM)
      yield put(getCardDetails(action.id));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* getWishlist() {
  yield put(commonLoader(false));
  try {
    const res = yield call(getCall, {
      url: `/user/wishlist`
    });
    yield put(getWishlistSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* addToCart(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(postCall, {
      url: `/cart`,
      inputs: { cardId: action.id, size: action.size },
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (action.cType === types.WISHLIST) yield put(getWishlistDataRequest());
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* getCartItems(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(getCall, {
      url: `/cart`,
      inputs: { cardId: action.id },
      showSnack: true
    });
    if (res) yield put(getCartItemsSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* updateCart(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/cart/${action.id}`,
      showSnack: true,
      inputs: { quantity: action.value, size: action.size }
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* deleteCartItem(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(deleteCall, {
      url: `/cart/${action.id}`,
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* moveToWishlist(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(putCall, {
      url: `/cart/wishlist/${action.id}`,
      inputs: { size: action.size },
      showSnack: true
    });
    yield put(updateCartCount(res.data));
    if (res) yield put(getCartItemsRequest());
  } catch (err) {
    yield put(commonLoader(true));
  }
}

export function* getCardData(action) {
  yield put(commonLoader(false));
  try {
    const res = yield call(getCall, {
      url: `/card/${action.id}`
    });
    if (res) yield put(getCardDetailsSuccess(res.data));
    yield put(commonLoader(true));
  } catch (err) {
    yield put(commonLoader(true));
  }
}
