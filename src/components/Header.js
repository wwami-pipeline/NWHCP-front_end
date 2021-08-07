import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";

const Header = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/" id="navbar-brand">
        NWHCP
      </Navbar.Brand>
      <Navbar.Toggle area-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/how-to" className="nav-link">
            How To
          </Link>
          <Link to="/programs" className="nav-link">
            Find Programs
          </Link>
          {/* <Link to="/post-opportunity" className="nav-link">
            Post Opportunity
          </Link> */}
          <Link to="/" className="nav-link">
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

export default Header;