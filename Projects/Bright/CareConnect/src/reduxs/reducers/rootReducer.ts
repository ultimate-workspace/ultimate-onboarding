import {combineReducers} from '@reduxjs/toolkit';

import app, {initialState as appInitState} from './app-reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  app: app,
});
const initialState = rootReducer(
  {
    app: appInitState,
  },
  {},
);
// export default rootReducer;
export default (state: RootState, action: any) => {
  if (action.type === 'CLEAR_PERSIST_DATA') {
    return rootReducer(initialState, action);
  }
  return rootReducer(state, action);
};
