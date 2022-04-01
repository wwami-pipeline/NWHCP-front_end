import React from 'react';
import '../scss/footers.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// test

const Footer = () => {
  return (
    <Container fluid className="footer main-footer py-3 mt-4" style={{ padding: "40px 15%" }}>
      <h2 style={{ color: "white", marginTop: 48 }}>
        Contact
      </h2>
      <Row className='justify-content-between' style={{ marginTop: 24 }}>
        <Col xs={5}>
          <Row>
            <Col xs={3}>
              <FontAwesomeIcon icon={faUserCircle} style={{ height: 56, width: 56 }} />
            </Col>
            <Col xs={9}>
              <Row>
                <h4 className='footer'>Name, Position</h4>
                <h4 className='sub-text-footer'>Department</h4>
              </Row>
              <Row style={{ marginTop: 24 }}>
                <h4 className='sub-text-footer'>email@gmail.com</h4>
                <h4 className='sub-text-footer'>(206)221-4613</h4>
                <h4 className='sub-text-footer'>4200 Whitman Ct NE, Seattle, WA</h4>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Row>
            <Col xs={3}>
              <FontAwesomeIcon icon={faEnvelope} style={{ height: 56, width: 56 }} />
            </Col>
            <Col xs={9}>
              <Row>
                <h4 className='footer'>Mailing address</h4>
              </Row>
              <Row style={{ marginTop: 24 }}>
                <h4 className='sub-text-footer'>4200 Whitman Ct NE,</h4>
                <h4 className='sub-text-footer'>Seattle, 98195</h4>
                <h4 className='sub-text-footer'>WA</h4>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="small mt-2">NWHCP ©2021</p>
          <p className="small mt-2">Please use computer browser for best experience</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;