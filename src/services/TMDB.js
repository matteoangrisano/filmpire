// createApi: consente di definire gli endpoint da cui recuperare i dati da API di back-end
// o altre origini asincrone e include la configurazione di come recuperare e trasformare i dati
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

// Creo l'API per effettuare il fetch da TMDB
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        //* Get Genres by [Type]
        getGenres: builder.query({
            query: () => {
                return `genre/movie/list?&api_key=${tmdbApiKey}`;
            },
        }),

        //* Get Movies by [Type]
        getMovies: builder.query({
            query: () => {
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),
    }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
