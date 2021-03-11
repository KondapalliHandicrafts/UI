import { createAction } from '__GLOBAL__/redux';
import { post } from '__GLOBAL__/webAPI';
import { UNMOUNT, REGISTER_LOADER } from '../_helpers/constants';

export const unmount = createAction(UNMOUNT);
export const registerLoader = createAction(REGISTER_LOADER, 'value');
export const registerUserSuccess = createAction(REGISTER_LOADER);

export const registerUser = (values, history) => async dispatch => {
  dispatch(registerLoader(false));
  try {
    const res = await post({
      url: '/user',
      inputs: values,
      showSnack: true
    });
    if (res) history.push('/login');
  } catch (err) {
    dispatch(registerLoader(true));
  }
};
