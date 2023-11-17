export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getIsLoadingUser = state => state.auth.isLoading;

export const getErrorUser = state => state.auth.error;
