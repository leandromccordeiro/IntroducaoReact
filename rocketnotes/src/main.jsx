import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js'

import theme from './styles/theme.js';

import {Details} from './pages/Details/index.jsx';

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Details />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
