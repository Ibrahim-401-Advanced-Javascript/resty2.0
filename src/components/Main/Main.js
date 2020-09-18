import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';
import '../../App.js'
import History from '../History/History.js';
import Results from '../Results/Results.js';
import Help from './Help.js';

const Main = (props) => {

  // console.log('test:', props);

  return (
    <main className="Main">
      <Switch>
  
        <Route exact path="/">
          <Results {...props} />
        </Route>
  
        <Route exact path="/history">
          <History {...props}/>
          {/* <History handleCall={props.listCall} request={props.request}/> */}
        </Route>
  
        <Route exact path="/help">
          <Help />
        </Route>
  
      </Switch>
    </main>
  )

}

export default Main;
