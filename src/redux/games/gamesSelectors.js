export const selectGames = state => state.games.items;

export const selectCurrentPage = state => state.games.currentPage;

export const selectTotalGames = state => state.games.totalGames;

export const selectGenre = state => state.games.genre;

export const selectIsLoading = state => state.games.isLoading;

export const selectError = state => state.games.error;
