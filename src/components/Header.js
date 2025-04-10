import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "../scss/header.scss";
const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="nwhcp-nav mb-4"
      style={{
        margin: "1.1rem",
        border: "1px solid #101010",
        borderRadius: "18px",
        boxShadow: "2px 2px 2px 1px #949494",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ maxWidth: "60%" }}>
          <div className="d-flex align-items-center">
            <StaticImage
              src="../images/logo-image.png"
              alt="NWHCP Logo"
              width={40}
              className="me-2 flex-shrink-0"
            />
            <h2
              style={{ 
                fontSize: "1.1rem",
                lineHeight: "1.2",
                marginBottom: 0,
                hyphens: "auto",
                wordWrap: "break-word"
              }}
              className="text-primary"
            >
              Northwest Health Career Path
            </h2>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="custom-link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="custom-link">
              About
            </Nav.Link>
            <Nav.Link href="/programs" className="custom-link">
              Find Programs
            </Nav.Link>
            <Nav.Link href="/post" className="custom-link">
              Add a Program
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;