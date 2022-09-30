// createApi: consente di definire gli endpoint da cui recuperare i dati da API di back-end
// o altre origini asincrone e include la configurazione di come recuperare e trasformare i dati
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// Creo l'API per effettuare il fetch da TMDB
export const tmdbApi = createApi({
	reducerPath: 'tmdbApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
	endpoints: (builder) => ({
		// Get Genres by [Type] (crea automaticamente Hook useGetGenresQuery)
		getGenres: builder.query({
			query: () => {
				return `genre/movie/list?&api_key=${tmdbApiKey}`;
			},
		}),

		// Get Movies by [Type] (crea automaticamente Hook useGetMoviesQuery)
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page, searchQuery }) => {
				// Get Movies by Search
				if (searchQuery) {
					return `search/movie/?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get Movies by Category
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
					return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get Movies by Genre
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
					return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get Popular Movies (per il rendering iniziale, quando non è stata selezionato genere/categoria)
				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),
	}),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
