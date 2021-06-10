import React, { Fragment } from 'react';
import Appbar from './common/Appbar';
import GameAppbar from './common/GameAppbar';
import Home from './pages/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Supply from './components/Supply';
import TotalSupply from './components/TotalSupply';
import Play from './pages/Play/Play';

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
          <Route exact path="/bet">
            <Fragment>
              <GameAppbar />
              <Play />
            </Fragment>
          </Route>
          <Route exact path="/api/cirsupply">
            <Fragment>
              <Supply />
            </Fragment>
          </Route>
          <Route exact path="/api/totalsupply">
            <Fragment>
              <TotalSupply />
            </Fragment>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
