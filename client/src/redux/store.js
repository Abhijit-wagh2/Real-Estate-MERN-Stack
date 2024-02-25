import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    user : userReducer
  },

  //used to serialize redux state
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),


})

