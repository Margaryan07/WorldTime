import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { logInApi } from '../services/loginApi'

export const store = configureStore({
  reducer: {
    [logInApi.reducerPath]: logInApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logInApi.middleware),
})


setupListeners(store.dispatch)