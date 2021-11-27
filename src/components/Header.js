import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "../scss/header.scss";
const Header = () => {
  return (
    <Navbar expand="md" className="nwhcp-nav mb-4">
      <Navbar.Brand href="/">
        <StaticImage
          src="../images/logo-image.png"
          alt="NWHCP Logo"
          width={32}
        />
      </Navbar.Brand>
      <Navbar.Toggle area-controls="basic-navbar-nav" />
      <Navbar.Collapse className="links-wrapper justify-content-between">
        <Nav>
          <Nav.Link href="/" className="custom-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="custom-link">
            About
          </Nav.Link>
          <Nav.Link href="/how-to" className="custom-link">
            How To
          </Nav.Link>
          <Nav.Link href="/programs" className="custom-link">
            Find Programs
          </Nav.Link>
          <Nav.Link
            href="https://redcap.iths.org/surveys/?s=3FNCRCFYC9"
            target="_blank"
            className="custom-link"
          >
            Post Opportunity
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
