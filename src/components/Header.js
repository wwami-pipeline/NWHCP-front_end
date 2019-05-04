import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="appHeader">
      <header>
        <nav>
          <Link to="/" id="HomeLink">
            <img id='logo' src='./logo-image.png' alt='temp' />
            Northwest Health Career Path
          </Link>
          <div id='links'>
            <NavLink className='navLink' activeClassName='curRoute' to="/find-programs">
              Home
            </NavLink>
            <NavLink className='navLink' activeClassName='curRoute' to="/locations">
              Map
            </NavLink>
            <NavLink className='navLink' activeClassName='curRoute' to="/find-programs">
              Programs
            </NavLink>
            <NavLink className='navLink' activeClassName='curRoute' to="/find-programs">
              Resources
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
