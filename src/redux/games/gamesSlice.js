import { createSlice } from '@reduxjs/toolkit';
import {
  fetchGames,
  setPage,
  setGenre,
  setFreshGames,
} from './gamesOperations';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    items: [],
    currentPage: 1,
    isFreshGamesFirst: true,
    totalGames: null,
    genre: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchGames.pending](state) {
      state.isLoading = true;
    },

    [fetchGames.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.games;
      state.totalGames = action.payload.gamesListLength;
    },

    [fetchGames.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [setPage.fulfilled](state) {
      state.currentPage += 1;
    },

    [setGenre.fulfilled](state, action) {
      state.currentPage = 1;
      const { payload } = action;
      payload === 'ALL' ? (state.genre = false) : (state.genre = payload);
    },

    [setFreshGames.fulfilled](state) {
      state.isFreshGamesFirst = !state.isFreshGamesFirst;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;
