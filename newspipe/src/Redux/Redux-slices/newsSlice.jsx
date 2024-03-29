import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const getNews = createAsyncThunk(
  `news/getNews`,
  async () => {
    try {
      const res = await axios.get(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news.json`)
      const result = Object.entries(res.data);
      return result;

    } catch (e) {
      console.log(e)
    }
  }

);
export const addNews = createAsyncThunk(
  `news/addNews`,
  async (params) => {
    try {
      const res = await axios.post(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news.json`, params)
      const result = res.data;
      return [result.name, params];
    } catch (e) {
      console.log(e)
    }
  }

);
export const removeNews = createAsyncThunk(
  `news/removeNews`,
  async (id) => {
    try {
      const res = await axios.delete(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news/${id}.json`)
      return id;
    } catch (e) {
      console.log(e)
    }
  }

);
export const editNews = createAsyncThunk(
  `news/editNews`,
  async (params) => {
    try {
      const res = await axios.patch(`https://newspaper-1eeec-default-rtdb.europe-west1.firebasedatabase.app/news/${params.id}.json`, params)
      return res;
    } catch (e) {
      console.log(e)
    }
  }

);

const initialState = { news: [] }

export const newsSlice = createSlice({
  name: 'news',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload || [];
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.news = [...state.news, action.payload] || [];
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.news = state.news.filter(el => el[0] != action.payload) || [];
      })

  }
})
export default newsSlice.reducer;
