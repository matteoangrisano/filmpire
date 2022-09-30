import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

// Configurazione dello Store di Redux: gestisce gli stati e li mette a disposizione globale,
// non del singolo componente
export default configureStore({
	// Elenco dei reducers: funzioni
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		currentGenreOrCategory: genreOrCategoryReducer,
		user: userReducer,
	},
});
