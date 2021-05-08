import React, {Component, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { Collapse } from 'reactstrap';

// export class SingleResult extends React.Component {
function SingleResult() {
    // render() {
        const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
                <h5>Seattle Assistant Program</h5>
                <Container>
                    <Row>
                        <Col xs={3}>
                        <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                        </Col>
                        <Col xs={9}>
                            <p>
                                Seattle Central College
                                <br/>
                                Education Level: College | Academy 
                                <br />
                                Career Emphasis: Nursing
                            </p>
                        </Col>
                    </Row>
                    <p>
                        The Nursing program at Seattle Central offers an Associate in Nursing Direct Transfer Degree/Major Related Program (AN DTA/MRP) with...
                        <br />
                        See more
                    </p>
                </Container>
                <Container>
                    <h5>Contact Information</h5>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faGlobe} /> Website:
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Visit</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faEnvelope} /> Email:
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faPhone} /> Phone:
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address:
                        </Col>
                    </Row>
                </Container>
                <div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <p>hey ;)</p>
                </Collapse>
                </div>
            </div>
        )
    // }
}

export default SingleResult;