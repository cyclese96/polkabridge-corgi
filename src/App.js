import React, { Fragment } from 'react';
import Appbar from './common/Appbar';
import Home from './pages/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Supply from './components/Supply';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Appbar />
              <Home />
            </Fragment>
          </Route>
          <Route exact path="/api/cirsupply">
            <Fragment>
              <Supply />
            </Fragment>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
