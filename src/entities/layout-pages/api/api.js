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
        console.log(arg)
      }
    }),
  }),
});

export const { useLazyGetLayoutQuery, useGetLayoutQuery } = api_2;
