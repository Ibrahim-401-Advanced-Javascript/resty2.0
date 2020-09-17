import React from 'react';
import './History.scss';

const History = (props) => {

  const calls = props.calls || {};

  function loadRequest(call) {
    props.handleCall(call);
  }


  return (
    <section className="History">
      <h3 id="calls-header">Previous Calls:</h3>
      
      <ul id="history-list">
        {/* {
          Object.keys(calls).map(key =>           
            <li key={key}>
              <span className={`method ${props.calls[key].method}`}>{props.calls[key].method}</span>
              <button className="url" onClick={()=> loadRequest(props.calls[key])}>{props.calls[key].url}</button>
            </li>,
          )
        } */}
        {/* <li>{props.method}</li>
        <li>{props.url}</li> */}
      </ul>
 
    </section>
  )

}

export default History;