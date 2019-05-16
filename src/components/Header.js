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
      M.AutoInit()
      document.addEventListener('DOMContentLoaded', function() {
        var options = {
          edge: 'right'
        }
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });
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
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="sidenav sidenav-close" id="mobile-demo">
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
