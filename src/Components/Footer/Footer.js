import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                {/* <div className="footerInfo container"> */}
                <Container className="footer-info">
                    {/* <div class="row"> */}
                    <Row className="">
                        <Col xs={4}>
                            <p>NWHCP ©2021</p>
                        </Col>
                        <Col xs={4}>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} /> (206)221-4613
                            </p>
                        </Col>
                        <Col xs={4}>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> somserve@uw.edu
                            </p>
                        </Col>
                    </ Row>
                </Container>
            </div>
        )
    }
}