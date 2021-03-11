import { createAction } from '__GLOBAL__/redux';
import { post } from '__GLOBAL__/webAPI';
import { UNMOUNT, LOGIN_SUCCESS } from '../_helpers/constants';
import { persistor } from '../../../store';

export const loginSuccessful = createAction(LOGIN_SUCCESS, 'data');
export const unmount = createAction(UNMOUNT);

export const loginUser = data => async dispatch => {
  try {
    const res = await post({ url: '/user/login', inputs: data });
    if (res) dispatch(loginSuccessful(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const logout = history => async () => {
  try {
    await post({ url: '/user/logout' });
    persistor.purge();
    history.push('/login');
  } catch (err) {
    console.log(err);
  }
};
