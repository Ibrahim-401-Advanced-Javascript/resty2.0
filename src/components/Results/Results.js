import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  return (
    <section className="Results-section">
        <h3 id="results-header">Results:</h3>

        <h5 id="count">Count: {props.count}</h5>
        {/* <h5 id="header-title">Headers: </h5> */}
        <JSONPretty id="headers" data={props.headers}></JSONPretty>
        <JSONPretty id="results" data={props.results}></JSONPretty>
    </section>
  )
}

export default Results;