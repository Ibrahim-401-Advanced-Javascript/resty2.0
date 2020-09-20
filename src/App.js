import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import md5 from 'md5';
// import axios from 'axios';

import './App.css';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Main from './components/Main/Main.js';
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

  updateHistory = (request) => {
    console.log('logging before updateHistory');

    let hash = md5(JSON.stringify(request));

    console.log(hash);

    const history = { ...this.state.history, [hash]: request };

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  listHistory = () => {
    console.log('logging before getting history');
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
    console.log(history);
  }

  listCall = (method, url) => {

    let request = {
      method, url
    }

    this.setState({ request })
    this.updateHistory({request});
    
  }

  listChar = (count, headers, results) => {
    this.setState({ count, headers, results })
    
    // console.log('state from app:', this.state);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        
          <Header />
          <Form request={this.state.request} popCall={this.listCall} popList={this.listChar}/>
          <Main state={this.state}/>
          <Footer />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
