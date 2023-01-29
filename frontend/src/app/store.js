import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from '../features/cocktails/cocktailSlice.'

export const store = configureStore({
  reducer: {
    cocktails: cocktailReducer
  },
});