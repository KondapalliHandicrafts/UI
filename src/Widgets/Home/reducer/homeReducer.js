import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, CARDS_DATA } from '../_helpers/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const homeReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [CARDS_DATA]: (state, action) => ({
    ...state,
    data: action.data,
    dataLoaded: true
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: []
  })
};

export default createReducer(defaultState, homeReducer);
