import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null, // You can change this to [] if you prefer
    nowPopularMovies: null, // Initialized as null, can also be []
    nowTopRatedMovies: null, // Initialized as null, can also be []
    nowUpComingMovies: null, // Initialized as null, can also be []
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addNowUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addNowPopularMovies,
  addNowTopRatedMovies,
  addNowUpComingMovies,
} = movieSlice.actions;
