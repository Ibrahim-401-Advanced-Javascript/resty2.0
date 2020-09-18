import React from 'react';
import './History.scss';

const History = (props) => {

  const request = props.request || {};

  // function loadRequest(request) {
  //   props.handleCall(request);
  // }


  return (
    <section className="History">
      <h3 id="calls-header">Previous Calls:</h3>
      
      <ul id="history-list">
        {
          Object.keys(request).map(key =>           
            <li key={key}>
              <span className={`method ${props.request[key].method}`}>{props.request[key].method}</span>
          <span className="url">{props.request[key].url}</span>
              {/* <button className="url" onClick={()=> loadRequest(props.request[key])}>{props.request[key].url}</button> */}
            </li>,
          )
        }
        {/* <li>{props.method}</li>
        <li>{props.url}</li> */}
      </ul>
 
    </section>
  )

}

export default History;