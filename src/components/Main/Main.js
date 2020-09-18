import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';
import '../../App.js'
import History from '../History/History.js';
import Results from '../Results/Results.js';
import Help from './Help.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      count: 0,
      headers: {},
      results: [],
      request: {},
      history: {},
    }
  }

  listCall = (method, url) => {

    let request = {
      method, url
    }

    this.setState({ request })
    
  }
  
  render() {    
    return (
      <main className="Main">
        <Switch>
  
          <Route exact path="/">
            <Results method={this.state.method} url={this.state.url} count={this.state.count} results={this.state.results} headers={this.state.headers}/>
          </Route>
  
          <Route exact path="/history">
            <History handleCall={this.listCall} request={this.state.request}/>
          </Route>
  
          <Route exact path="/help">
            <Help />
          </Route>
  
        </Switch>
      </main>
    )
  }
}

export default Main;
