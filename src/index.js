import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App';
import store from './app/store';

const theme = createTheme({});

ReactDOM.render(
    // Mette a disposizione dell'intera applicazione lo store di Redux
    <Provider store={store}>
        // Mette a disposizione dell'intera applicazione il tema di MUI
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
