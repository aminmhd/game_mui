import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { waitFor } from "@testing-library/dom";
import axios from "axios";

let ApiKey = "5ef9e53390fd48088034403e7f8b8222";

export const getGames = createAsyncThunk("cart/getGames", async (_, thunkApi) => {
  const url = `https://api.rawg.io/api/games?key=${ApiKey}`;
  const response = await axios.get(url);
  return response.data.results; 
});

const initialState = {
  games: [],
  isLoading: false,
  isError: false,
};


export const searchQuery = createAsyncThunk("cart/searchQuery", async (searchParam, thunkApi) => {
  const url = `https://api.rawg.io/api/games?key=${ApiKey}&search=${searchParam}`;
  const response = await axios.get(url)
  return response.data.results
})


const gameApiSlice = createSlice({
  name: "gamesApiSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.games = action.payload;
        state.isError = false;
      })
      .addCase(getGames.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(searchQuery.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(searchQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.games = [...action.payload]
        state.isError = false
      })
      .addCase(searchQuery.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  },
});


export default gameApiSlice.reducer;
