import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://127.0.0.1:8000/api/';
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['User'],
  mode: 'no-cors',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // credentials: true,
    // prepareHeaders: (headers) => {
    //   const accessToken = localStorage.getItem('token');
    //   if (accessToken) {
    //     // headers.set('authorization', `Bearer ${accessToken}`);
    //     headers.set('Content-Type', 'application/json');
    //   }
    //
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        body: user,
        url: 'auth/users/',
        method: 'POST',
      }),
    }),
    auth: builder.mutation({
      query: (user) => ({
        body: user,
        url: 'auth/token/login/',
        method: 'POST',
      }),
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log(baseQueryReturnValue);
        localStorage.setItem('token', baseQueryReturnValue.auth_token);
      },
    }),
  }),
});
export const { useCreateUserMutation, useAuthMutation } = api;
