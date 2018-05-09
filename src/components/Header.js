import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="appHeader">
      <header>
        <nav>
          <Link to="/" id="HomeLink">Waypoint</Link>
          <div id='links'>
            <Link to="/map">Map</Link>
            <Link to="/findPrograms">Find Programs</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
