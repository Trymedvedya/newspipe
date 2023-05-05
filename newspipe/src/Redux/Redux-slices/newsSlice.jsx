import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [{ id: 1, title: "adaasd", body: "sadadasdasdasd" }],
}
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNew:(state,action) => {
      state.push({
        id:action.payload.id,
        title:action.payload.title,
        body:action.payload.body,
      })
    console.log(state[0])
    },
    getNews: (state) => {
      return state.news;
    },
  },
})
export const {addNew,getNews} = newsSlice.actions
export default newsSlice.reducer