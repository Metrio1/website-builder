import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api_layout = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:5000/api/',
  }),
  endpoints: (builder) => ({
    getLayout: builder.query({
      query: (templateId) => `layout/${templateId}`,
      onQueryStarted(arg, api) {
        console.log(arg);
      },
    }),
    getTag: builder.query({
      query: (tagId) => `tag/${tagId}`,
      onQueryStarted(tag, api) {
        console.log(tag);
      },
    }),
    getMain: builder.query({
      query: (mainId) => `main/${mainId}`,
      onQueryStarted(main, api) {
        console.log(main);
      },
    }),
  }),
});

export const { useLazyGetLayoutQuery, useGetLayoutQuery, useLazyGetTagQuery,
  useGetTagQuery, useLazyGetMainQuery, useGetMainQuery } = api_layout;
