import { createAction } from '__GLOBAL__/redux';
import { post } from '__GLOBAL__/webAPI';
import {
  UNMOUNT,
  RESETPASSWORD_LOADER,
  RESETID_SUCCESS,
  RESETPASSWORD_SUCCESS
} from '../_helpers/constants';

export const unmount = createAction(UNMOUNT);
export const resetPasswordLoader = createAction(RESETPASSWORD_LOADER, 'value');
export const checkResetIDSunccess = createAction(RESETID_SUCCESS, 'data');
export const resetPasswordSuccess = createAction(RESETPASSWORD_SUCCESS, 'data');

export const checkResetID = resetId => async dispatch => {
  try {
    const res = await post({
      url: '/user/checkResetId',
      inputs: { resetId }
    });
    if (res) {
      dispatch(checkResetIDSunccess(res.data));
    }
  } catch (err) {
    dispatch(resetPasswordLoader(true));
  }
};

export const resetPassword = (values, resetId) => async dispatch => {
  dispatch(resetPasswordLoader(false));
  try {
    const res = await post({
      url: '/user/resetPassword',
      inputs: {
        resetId,
        password: values.password,
        secAns1: values.securityAnswer1,
        secAns2: values.securityAnswer2
      },
      showSnack: true
    });
    if (res) {
      dispatch(resetPasswordSuccess(res.data));
    }
  } catch (err) {
    dispatch(resetPasswordLoader(true));
  }
};
