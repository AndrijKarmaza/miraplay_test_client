import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const gamesBaseURL = 'https://api.miraplay.cloud/games';

export const fetchGames = createAsyncThunk(
  'games/fetchAll',
  async (games, thunkAPI) => {
    try {
      const response = await axios.post(`${gamesBaseURL}/by_page`, games);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setPage = createAsyncThunk('games/setPage', () => {});

export const setGenre = createAsyncThunk('games/setGenre', genre => genre);

export const setFreshGames = createAsyncThunk('games/setFreshGames', () => {});
