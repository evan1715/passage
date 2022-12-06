//Minimal redux-thunk implementation
const clunk =
    () =>
    ({ dispatch, getState }) =>
    (next) =>
    (action) =>
        typeof action === 'function' ? action(dispatch, getState) : next(action);

module.export = clunk;
