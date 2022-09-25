import { createSlice } from '@reduxjs/toolkit';

// Creazione di uno Slice Redux: funzione che accetta un nome, uno stato iniziale, un oggetto di funzioni reducers
export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName: '',
        page: 1,
        searchQuery: '',
    },
    // Qui posso creare i reducers: funzioni che aggiornano lo state a livello globale e non del singolo componente
    reducers: {
        selectGenreOrCategory: (state, action) => {
            console.log(action.payload);
            state.genreOrCategoryName = '';
        },
    },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;
