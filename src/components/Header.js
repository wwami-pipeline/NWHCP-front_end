import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="appHeader">
      <header>
        <nav>
          <Link to="/" id="HomeLink">
            <img id='logo' src='./waypoint-web.png' alt='temp'/>
          </Link>
          <div id='links'>
            <NavLink className='navLink' activeClassName='curRoute' to="/locations">
              Locations
            </NavLink>
            <NavLink className='navLink' activeClassName='curRoute' to="/find-programs">
              Find Programs
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
