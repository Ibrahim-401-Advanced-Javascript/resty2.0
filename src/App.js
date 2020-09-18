import React from 'react';
// import { Link, Navlink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import md5 from 'md5';
// import axios from 'axios';

import './App.css';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Main from './components/Main/Main.js';
// import History from './components/History/History.js';
// import Results from './components/Results/Results.js';
import Footer from '../src/components/Footer/Footer.js';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      count: 0,
      headers: {},
      results: [],
      request: {},
      history: {},
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  updateHistory = (req) => {
    console.log('logging before updateHistory');

    let hash = md5(JSON.stringify(req));

    console.log(hash);

    const history = { ...this.state.history, [hash]: req };

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  listHistory = () => {
    console.log('logging before getting history');
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  listCall = (method, url) => {

    let request = {
      method, url
    }

    this.setState({ request })
    
  }

  listChar = (count, headers, results) => {
    this.setState({ count, headers, results })
    
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        
        <Header />
        <Form request={this.state.request} popCall={this.listCall} popList={this.listChar}/>
        <Main />
        {/* <History handleCall={this.listCall} request={this.state.request}/> */}
        {/* <Results method={this.state.method} url={this.state.url} count={this.state.count} results={this.state.results} headers={this.state.headers}/> */}
        
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
