import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { blue, grey } from '@material-ui/core/colors';

import App from './App';
import Secure from './Secure';
import * as serviceWorker from './serviceWorker';

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
    type: 'dark',
  },
  shape: {
    borderRadius: 0,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/secure'>
            <Secure />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
