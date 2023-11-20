import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from './authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
    },

    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
      Notify.success(
        'We have sent an email to your email address. To complete the registration, please follow the link provided in the email and then log in.'
      );
    },

    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.dir(action);
    },

    [logInUser.pending](state) {
      state.isLoading = true;
    },

    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    [logInUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logOutUser.pending](state) {
      state.isLoading = true;
    },

    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },

    [logOutUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },

    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    [fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
