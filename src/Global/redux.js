// @flow
export function createReducer(initialState: any, actionHandlers: any): any {
  return function reducer(state = initialState, action = {}) {
    // eslint-disable-next-line
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action);
    }
    return state;
  };
}

export function createAction(type: string, ...argNames: any): any {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[arg] = args[index];
    });
    return action;
  };
}
