import React from 'react';
import './Main.scss';

import { Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import Test from './Test.js';
import Help from './Help.js';

function Main() {
  return (
    <main className="Main">
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/history">
          <Test />
        </Route>

        <Route exact path="/help">
          <Help />
        </Route>

      </Switch>
    </main>
  )
}

export default Main;
