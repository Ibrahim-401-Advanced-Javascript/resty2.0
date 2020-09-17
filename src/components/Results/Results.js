import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  return (
    <section className="Results">
        <section id="results-header">
          <h3>Results:</h3>
        </section>

        <section id="results-body">
          <h5 id="count">Count: {props.count}</h5>
         <JSONPretty id="headers" data={props.headers}></JSONPretty>
          <JSONPretty id="results" data={props.results}></JSONPretty>
        </section>
    </section>
  )
}

export default Results;