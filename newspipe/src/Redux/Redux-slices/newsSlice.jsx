import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



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
export const addNews = createAsyncThunk(
  `news/addNews`,
  async (state) => {
    const params={
      title:state.title,
      body:state.body
    }
   try{
    const res = await axios.post(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news.json`,params)
    
    const result = Object.entries(res.data);
    console.log(res,'res')
    console.log(result,'result')
    return result; 
   }catch(e){
    console.log(e)
   }
  }

);

const initialState = {news:[],sendData:{title:'',body:''}}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload || [];
      })
  }
})

export default newsSlice.reducer
