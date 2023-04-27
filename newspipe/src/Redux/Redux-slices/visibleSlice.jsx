import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../API/baseUrl'

const initialState = {
  news: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: async (state) => {
      
    },
    invisible: (state) => {
      state.value = false
    },
  },
})
export const {visible, invisible} = visibleSlice.actions
export default visibleSlice.reducer