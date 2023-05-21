import { configureStore } from '@reduxjs/toolkit'
import visibleReducer from '../Redux-slices/visibleSlice'
import newsReducer from '../Redux-slices/newsSlice'
import tempIdReducer from '../Redux-slices/tempIdSlice'
export const store = configureStore({
  reducer: {
    visibility:visibleReducer,
    news:newsReducer,
    tempId:tempIdReducer
  },
})
