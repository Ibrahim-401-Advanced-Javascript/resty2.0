import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (

    <header className="App-header">
      
      <section id="title-section">
        <h1 id="resty-title">RESTy</h1>
      </section>

      <section id="nav-section">
        <nav>
          <ul id="nav-ul">
            <li>
              <NavLink className="link" activeClassName="here" to="/" data-testid="homelink">Home</NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="here" to="/history" data-testid="historylink">History</NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="here" to="/help" data-testid="helplink">Help</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      
    </header>
  )
}

export default Header;