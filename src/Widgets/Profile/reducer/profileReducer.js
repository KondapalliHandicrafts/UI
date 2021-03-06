import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import {
  UNMOUNT,
  PROFILE_LOADER,
  PROFILE_SUCCESS,
  TOGGLE_DIALOG,
  ADD_ADDRESS,
  EDIT_ADDRESS
} from '__GLOBAL__/constants';

const defaultState = {
  data: null,
  dataLoaded: false,
  addPanelOpen: false,
  editPanelOpen: false
};

const profileReducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [PROFILE_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data
  }),
  [TOGGLE_DIALOG]: (state, action) => {
    if (action.mode === ADD_ADDRESS)
      return { ...state, addPanelOpen: action.data };
    if (action.mode === EDIT_ADDRESS)
      return {
        ...state,
        editPanelOpen: action.data.value,
        item: action.data.item
      };
    return { ...state };
  },
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
    data: null,
    addPanelOpen: false,
    editPanelOpen: false
  })
};

export default createReducer(defaultState, profileReducer);
