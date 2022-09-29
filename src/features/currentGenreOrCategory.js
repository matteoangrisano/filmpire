import { createSlice } from '@reduxjs/toolkit';

// Creazione di uno Slice Redux: funzione che accetta un nome, uno stato iniziale, un oggetto di funzioni reducers
export const genreOrCategory = createSlice({
	name: 'genreOrCategory',
	initialState: {
		genreIdOrCategoryName: '',
		page: 1,
		searchQuery: '',
	},
	// Qui posso creare i reducers: funzioni che mutano lo state a livello globale e non del singolo componente
	reducers: {
		selectGenreOrCategory: (state, action) => {
			state.genreIdOrCategoryName = action.payload;
		},
	},
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;
