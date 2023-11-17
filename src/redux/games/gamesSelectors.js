// import { createSelector } from '@reduxjs/toolkit';

export const selectGames = state => state.games.items;

export const selectCategory = state => state.games.category;

export const selectIsLoading = state => state.games.isLoading;

export const selectError = state => state.games.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterValue) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   }
// );
