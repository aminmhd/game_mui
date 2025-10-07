import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getPosts = createAsyncThunk("test/getting/posts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response)
    } catch (error) {

      thunkAPI.rejectWithValue(error)
    }


  })



export const getComments = createAsyncThunk(
  "test/getting/comments",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      return response.data;
    } catch (error) {
      // Always return rejectWithValue
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);




export const getPhotos = createAsyncThunk("test/getting/photos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
      console.log(response)

    } catch (error) {

      thunkAPI.rejectWithValue(error)

    }


  })

const initialState = {
  posts: [],
  comments: [],
  photos: [],
};

const testSlice = createSlice({
  name: "testQuerySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
      });
  },
});

export default testSlice.reducer;