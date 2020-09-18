import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {

  // console.log('state from results:', props.state);

  return (
    <section className="Results">
        <section id="results-header">
          <h3>Results:</h3>
        </section>

        <section id="results-body">
          <h5 id="count">Count: {props.state.count}</h5>
          <JSONPretty id="headers" data={props.state.headers}></JSONPretty>
          <JSONPretty id="results" data={props.state.results}></JSONPretty>
        </section>
    </section>
  )
}

export default Results;