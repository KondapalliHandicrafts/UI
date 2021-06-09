import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  TOGGLE_DIALOG,
  ADD_CARD,
  ADMIN_CARDS_DATA,
  EDIT_CARD
} from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  addPanelOpen: false,
  editPanelOpen: false
};

const adminDashboardReducer = {
  [PURGE]: () => {
    return defaultState;
  },
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
  [ADMIN_CARDS_DATA]: (state, action) => ({
    ...state,
    data: action.data
  })
};

export default createReducer(defaultState, adminDashboardReducer);
