import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { CARDS_UNMOUNT, CARDS_DATA } from '__GLOBAL__/constants';

const defaultState = {
  data: []
};

const homeReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CARDS_DATA]: (state, action) => ({
    ...state,
    data: action.data
  }),
  [CARDS_UNMOUNT]: state => ({
    ...state,
    data: []
  })
};

export default createReducer(defaultState, homeReducer);
