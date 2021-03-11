export function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action = {}) {
    // eslint-disable-next-line
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action);
    }
    return state;
  };
}

export function createAction(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[arg] = args[index];
    });
    return action;
  };
}
