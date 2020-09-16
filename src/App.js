import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Results from './components/Results/Results.js';
import Footer from '../src/components/Footer/Footer.js';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      method: '',
      url: '',
      count: 0,
      results: [],
      headers: {},
    }
  }

  stateMethod = method => {
    this.setState({ method });
  }

  stateURL = url => {
    this.setState({ url });
  }

  listChar = (count, results, headers) => {
    this.setState({ count, results, headers })
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Form popStateMethod={this.stateMethod} popStateURL={this.stateURL} popList={this.listChar}/>
        <Results method={this.state.method} url={this.state.url} count={this.state.count} results={this.state.results} headers={this.state.headers}/>
        <Footer />

      </div>
    );
  }
}

export default App;
