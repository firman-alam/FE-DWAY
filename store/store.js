'use client'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kkpAPI } from './api/api'

export const store = configureStore({
  reducer: {
    [kkpAPI.reducerPath]: kkpAPI.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([kkpAPI.middleware]),
})

setupListeners(store.dispatch)
