import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../entities/user/api/api.js';
import { api_2 } from '../entities/layout-pages/api/api.js';
import templateSlice, { setTemplateId } from '../entities/template/model/template.slice.js';
import tagSlice from '../entities/tag/model/tag.slice.js';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [api_2.reducerPath]: api_2.reducer,
    templateSlice: templateSlice,
    tagSlice: tagSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
