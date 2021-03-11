import { createAction } from '__GLOBAL__/redux';
import { post } from '__GLOBAL__/webAPI';
import {
  UNMOUNT,
  FORGOTPASSWORD_LOADER,
  FORGOTPASSWORD_SUCCESS
} from '../_helpers/constants';

export const unmount = createAction(UNMOUNT);
export const forgotPasswordLoader = createAction(
  FORGOTPASSWORD_LOADER,
  'value'
);
export const forgotPasswordSuccess = createAction(
  FORGOTPASSWORD_SUCCESS,
  'data'
);

export const forgotPassword = values => async dispatch => {
  dispatch(forgotPasswordLoader(false));
  try {
    const res = await post({
      url: '/user/forgotPassword',
      inputs: values
    });
    dispatch(forgotPasswordSuccess(res.data));
  } catch (err) {
    dispatch(forgotPasswordLoader(true));
  }
};
