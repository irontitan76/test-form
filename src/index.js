import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: blue[900],
      light: blue[500],
      main: blue[700],
    },
    secondary: {
      dark: grey[700],
      light: grey[300],
      main: grey[500],
    },
  },
  shape: {
    borderRadius: 0,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
