import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import baseURL from '../../API/baseUrl';


export const getNews = createAsyncThunk(
  `news/getNews`,
  async () => {
   try{
    const res = await axios.get(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news.json`)
    console.log(res.data)
    console.log(initialState)
    const result = Object.entries(res.data);
    return result;
    
   }catch(e){
    console.log(e)
   }
  }

);

const initialState = {news:[]}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.news.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload || [];
      })
  }
})
export const { addNew} = newsSlice.actions
export default newsSlice.reducer
