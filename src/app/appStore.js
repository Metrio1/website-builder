import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../entities/user/api/api.js';
import templateSlice, { setTemplateId } from '../entities/template/model/template.slice.js';

// const reducers = combineReducers({
//   [api.reducerPath]: api.reducer,
//   templateSlice: templateSlice,
// });

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    templateSlice: templateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
