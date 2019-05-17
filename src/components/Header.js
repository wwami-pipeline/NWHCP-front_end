import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

const NaviLinks = () => {
  return (
    <div>
      <li>
          <NavLink className='navLink' activeClassName='curRoute' exact to="/">
              Home
            </NavLink>
        </li>
        <li>
          <NavLink className='navLink' activeClassName='curRoute' to="/map">
              Map
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' activeClassName='curRoute' to="/about">
              About
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' activeClassName='curRoute' to="/resources">
              Resources
          </NavLink>
        </li> 
    </div>
  );
}

class Header extends React.Component {
    componentDidMount() {
      var options = {
        edge: 'right'
      }
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, options);
    } 

  render() {
    return (
      <header>
        <nav>
          <div class="nav-wrapper">
            {/* desktop */}
            <Link className="left brand-logo" to="/" id="HomeLink">
              <div className="valign-wrapper">
                <img className="navi-logo" id='logo' src='assets/logo-image.png' alt='temp'/>
                <span className="navi-title hide-on-small-and-down">Northwest Health Career Path</span>
                <span className="navi-title hide-on-med-and-up">NWHCP</span>
              </div>
            </Link>

            <ul className="right hide-on-small-and-down">
              <NaviLinks/>
            </ul>

            {/* mobile */}
            <div className="right hide-on-med-and-up">
              <a href="#" data-target="mobile-menu" class="valign-wrapper sidenav-trigger">
                <svg fill="#2B5F9E" height="32px" version="1.1" viewBox="0 0 32 32" width="32px">
                  <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                </svg>
              </a>
              <ul class="sidenav sidenav-close" id="mobile-menu">
                <NaviLinks/>
              </ul>
            </div>
            
          </div>
        </nav>
        
      </header>
    );
  }
}

export default Header;
