import { createAction } from '__GLOBAL__/redux';
import { post } from '__GLOBAL__/webAPI';
import { UNMOUNT, ADD_LOADER } from '../_helpers/constants';

export const unmount = createAction(UNMOUNT);
export const addCardLoader = createAction(ADD_LOADER, 'value');

export const addNewCard = data => async dispatch => {
  dispatch(addCardLoader(false));
  try {
    const formData = new FormData();
    formData.append('height', data.height);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('file', data.file);
    const res = await post({
      url: '/card',
      inputs: formData,
      showSnack: true
    });
    if (res) dispatch(addCardLoader(true));
  } catch (err) {
    dispatch(addCardLoader(true));
  }
};
