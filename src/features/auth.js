import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		isAuthenticated: false,
		sessionId: '',
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
			state.sessionId = localStorage.getItem('session_id');

			localStorage.setItem('accountId', action.payload.id);
		},
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

// Esportato così, in modo da poter semplificare il codice in Navbar riga 14:
// useSelector(userSelector) anziché useSelector((state) => state.user)
// questo implica che il componente debba importare la seguente funzione
export const userSelector = (state) => state.user;
