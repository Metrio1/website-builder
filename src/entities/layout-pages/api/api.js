import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api_2 = createApi({
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
  }),
});

export const { useLazyGetLayoutQuery, useGetLayoutQuery, useLazyGetTagQuery, useGetTagQuery } = api_2;
