import React from "react";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "../scss/header.scss";

const Header = () => {
  return (
    <Navbar
      expand="md"
      className="nwhcp-nav mb-4"
      style={{
        justifyContent: "space-between",
        margin: "1.1rem",
        border: "1px solid #101010",
        borderRadius: "18px",
        boxShadow: "2px 2px 2px 1px #949494",
      }}
    >
      <Nav.Item>
        <Navbar.Brand href="/">
          <Container>
            <Row>
              <StaticImage
                src="../images/logo-image.png"
                alt="NWHCP Logo"
                width={40}
              />
              <Col>
                <h2
                  style={{ display: "inline", fontSize: "1.1rem" }}
                  className="text-primary vertical-align"
                >
                  Northwest Health Career Path
                </h2>
              </Col>
            </Row>
          </Container>
        </Navbar.Brand>
      </Nav.Item>
      <NavItem>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse className="links-wrapper justify-content-between">
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
              Post Opportunity
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </NavItem>
    </Navbar>
  );
};
export default Header;
