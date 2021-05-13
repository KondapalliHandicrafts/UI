import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  DASHBOARD_LOADER,
  TOGGLE_DIALOG,
  ADD_CARD,
  CARDS_DATA,
  EDIT_CARD
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false,
  addPanelOpen: false,
  editPanelOpen: false
};

const adminDashboardReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [DASHBOARD_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [TOGGLE_DIALOG]: (state, action) => {
    if (action.mode === ADD_CARD)
      return { ...state, addPanelOpen: action.data };
    if (action.mode === EDIT_CARD)
      return {
        ...state,
        editPanelOpen: action.data.value,
        item: action.data.item
      };
    return { ...state };
  },
  [CARDS_DATA]: (state, action) => ({
    ...state,
    data: action.data,
    dataLoaded: true
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    editPanelOpen: false,
    addPanelOpen: false,
    data: []
  })
};

export default createReducer(defaultState, adminDashboardReducer);
