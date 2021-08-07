import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/" id="navbar-brand">
        NWHCP
      </Navbar.Brand>
      <Navbar.Toggle area-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link to="/" className="nav-link" exact>
            Home
          </Link>
          <Link to="/search" className="nav-link" exact>
            Find Programs
          </Link>
          <Link to="/post-opportunity" className="nav-link" exact>
            Post Opportunity
          </Link>
          <Link to="/about" className="nav-link" exact>
            About
          </Link>
          <Link to="/how-to" className="nav-link" exact>
            How To
          </Link>
          <Link to="/account" className="nav-link" exact>
            Account
          </Link>
          {/* <div>
                                        {this.state.isSignedIn ?
                                            <Button onClick={this.test}>Sign-Out</Button> :
                                        <Link to='/login' className="nav-link" exact>Login</Link> }
                
                                    </div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
