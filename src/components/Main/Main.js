import React from 'react';
import './Main.scss';

import { Route, Switch } from 'react-router-dom';

// import Home from './Home.js';
import History from '../History/History.js';
import '../../App.js'
import Results from '../Results/Results.js';
// import Test from './Test.js';
import Help from './Help.js';

function Main() {
  return (
    <main className="Main">
      <Switch>

        <Route exact path="/">
          <Results />
          {/* <Home /> */}
        </Route>

        <Route exact path="/history">
          <History />
          {/* <Test /> */}
        </Route>

        <Route exact path="/help">
          <Help />
        </Route>

      </Switch>
    </main>
  )
}

export default Main;
