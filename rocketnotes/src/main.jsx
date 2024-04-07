import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './pages/Details/index.jsx';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js'

import theme from './styles/theme.js';



//import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
