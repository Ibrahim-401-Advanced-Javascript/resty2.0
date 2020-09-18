import React from 'react';
import './History.scss';

const History = (props) => {

  return (
    <section className="History">
      <h3 id="calls-header">Previous Calls:</h3>
      
      <ul id="history-list">
        <li id="method">Method</li>
        <li id="url">Url</li>
      </ul>
 
    </section>
  )

}

export default History;