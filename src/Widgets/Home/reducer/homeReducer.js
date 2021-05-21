import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, CARDS_DATA, HOME_LOADER } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const homeReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [HOME_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
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
