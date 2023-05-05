import { configureStore } from '@reduxjs/toolkit'
import visibleReducer from '../Redux-slices/visibleSlice'
import newsReducer from '../Redux-slices/newsSlice'
export const store = configureStore({
  reducer: {
    visibility:visibleReducer,
    news:newsReducer
  },
})
