import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './Providers/Theme';


// eslint-disable-next-line no-undef
ReactDOM.render((
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>), // eslint-disable-next-line no-undef
document.getElementById('app'));
