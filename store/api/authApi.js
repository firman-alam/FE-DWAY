import { kkpAPI } from './api'

export const authApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `auth/sign-in`,
        method: 'POST',
        body: { ...data },
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `auth/sign-up`,
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation } = authApi
