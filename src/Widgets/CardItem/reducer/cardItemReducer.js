import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { CARD_DETAILS_SUCCESS } from '__GLOBAL__/constants';

const defaultState = {
  data: {}
};

const cardItemReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CARD_DETAILS_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data
  })
};

export default createReducer(defaultState, cardItemReducer);
