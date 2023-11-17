import { createSlice } from '@reduxjs/toolkit';
import { fetchGames, addContact, deleteContact } from './gamesOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  Notify.failure('Something went wrong please try later.');
};

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    items: [],
    category: 'all',
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
      state.items = action.payload;
    },

    [fetchGames.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // [addContact.pending](state) {
    //   state.isLoading = true;
    // },

    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    //   Notify.success('Contact successfully added.');
    // },

    // [addContact.rejected]: handleRejected,

    // [deleteContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    //   Notify.success('Contact deleted successfully.');
    // },
    // [deleteContact.rejected]: handleRejected,
  },
});

export const gamesReducer = gamesSlice.reducer;
