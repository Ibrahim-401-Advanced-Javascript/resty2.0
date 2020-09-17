import React from 'react';

import md5 from 'md5';
// import axios from 'axios';

import './App.css';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import History from './components/History/History.js';
import Results from './components/Results/Results.js';
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

  // updateResults = (count, headers, results) => {
  //   this.setState({ count, headers, results });
  //   console.log('in updateResults');
  // }

  // updateRequest = (request) => {

  //   this.setState({ request });
  //   console.log('in updateRequests');
  //   console.log(this.state);
  // }

  // fetchResults = async (request) => {
  //   try {
  //     // this.toggleLoading();
  //     this.updateRequest(request);
  
  //     let response = await axios(request);

  //     // this.toggleLoading();

  //     this.updateHistory(request);
  //     this.updateRequest(response.count, response.headers, response.data);
  //     console.log('hello from fetchResults');
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

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

        <Header />
        <Form request={this.state.request} popCall={this.listCall} popList={this.listChar}/>
        <History handleCall={this.listCall} calls={this.state.history}/>
        <Results method={this.state.method} url={this.state.url} count={this.state.count} results={this.state.results} headers={this.state.headers}/>
        <Footer />

      </div>
    );
  }
}

export default App;
