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
import BetFooter from './common/BetFooter';
import { Provider } from 'react-redux';
import store from './store';
import Marketplace from './pages/MarketPlace/Marketplace';

export default function App() {
  return (
    <Provider store={store}>
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
                <BetFooter />
              </Fragment>
            </Route>
            <Route exact path="/market">
              <Fragment>
                <Marketplace />
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
    </Provider>
  );
}
