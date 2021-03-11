import { createAction } from '__GLOBAL__/redux';
import { get } from '__GLOBAL__/webAPI';
import { UNMOUNT, CARDS_DATA } from '../_helpers/constants';

export const cardsLoaded = createAction(CARDS_DATA, 'data');
export const unmount = createAction(UNMOUNT);

export const getCardsData = () => async dispatch => {
  try {
    const res = await get({ url: '/cards' });
    dispatch(cardsLoaded(res.data));
  } catch (err) {
    console.log(err);
  }
};
