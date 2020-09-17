import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      count: 0,
      headers: {},
      results: [],
    }
  }

  handleURL = event => {
    let url = event.target.value;
    this.setState({ url });
  }

  handleMethod = event => {
    let method = event.target.value;
    this.setState({ method });
  }

  handleGo = async event => {
    event.preventDefault();
    let url = this.state.url;
    this.setState({ url });

    this.props.popCall(this.state.method, this.state.url);

    // send url to api
    let raw = await fetch(url);
 
    let headers = {};
    raw.headers.forEach((value, key) => {
      headers[key] = value;
    })

    let data = await raw.json();

    let count = data.count;
    let results = data.results;

    this.setState({ count, headers, results })
    this.props.popList(this.state.count, this.state.headers, this.state.results);


    // save call to local storage


  }

  render() {
    return (
      <section className="Form-section">
      <form className="Form" onSubmit={this.handleGo}>
        <br></br>

          <input type="radio" value="GET" name="method" className="radios" id="radio1" onChange={this.handleMethod}></input>
          <label htmlFor="radio1">GET</label>

          <input type="radio" value="POST" name="method" className="radios" id="radio2" onChange={this.handleMethod}></input>
          <label htmlFor="radio2">POST</label>

          <input type="radio" value="PUT" name="method" className="radios" id="radio3" onChange={this.handleMethod}></input>
          <label htmlFor="radio3">PUT</label>

          <input type="radio" value="DELETE" name="method" className="radios" id="radio4" onChange={this.handleMethod}></input>
          <label htmlFor="radio4">DELETE</label>

        <br></br>
  
        <input id="endpoint-input" type="text" placeholder={"Enter an API Endpoint"} onChange={this.handleURL}></input>
  
        <input type="submit" id="go-button" value="GO"></input>

      </form>
      </section>
    )
  }
}

export default Form;