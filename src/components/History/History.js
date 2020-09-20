import React from 'react';
import './History.scss';

const History = (props) => {

  console.log('in history:', props.state.request);

  return (
    <section className="History">
      <h3 id="calls-header">Previous Calls:</h3>
      
      <ul id="history-list">
        <li id="method">{props.state.request.method}</li>
        <li id="url">{props.state.request.url}</li>
      </ul>
 
    </section>
  )

}

export default History;