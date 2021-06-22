import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Container fluid className="footer footer-info py-3">
            <Row>
                <Col xs={6}>
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
                        (206)221-4613
                    </p>
                </Col>
                <Col xs={6}>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                        somserve@uw.edu
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p className="small mt-2">NWHCP ©2021</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;