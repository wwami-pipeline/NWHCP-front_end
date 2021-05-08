import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faLightbulb, faSearch, faMap} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import {SupportFooter} from '../SupportFooter/SupportFooter';

export class HowTo extends React.Component {
    render() {
        return (
            <div>
                <div className="padding-sides">
                    <div>
                        <h2 className="blue-color">How the NWHCP Site Works</h2>
                        <hr/>
                        <p className="font-size-12">Our map will link you to a variety of programs that will allow you to: </p>
                        <div className="font-size-12">
                            <p>
                                <FontAwesomeIcon icon={faCheck} /> Learn about opportunities in the health sciences and STEM,
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCheck} /> Experience hands-on activities,
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCheck} /> Prepare academically,
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCheck} /> Build your resume.
                            </p>
                        </div>
                        <p className="font-size-12">
                            <FontAwesomeIcon icon={faMap} /> <b>Explore</b> the wide variety of health careers.
                            <br/>
                            <FontAwesomeIcon icon={faLightbulb} /> <b>Learn</b> about how to become a doctor, nurse, phramacist, social worker, dentist, or therapist.
                            <br/>
                            <FontAwesomeIcon icon={faSearch} /> <b>Find</b> out more about health professions that you might not even have heard of, like health administration or health information technology!
                        </p>
                    </div>
                    <div>
                        <h2 className="blue-color">Included Programs</h2>
                        <hr />
                        <Container className="center-text">
                            <Row>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">After School Programs</p>
                                </Col>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">Summer Camps</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">Shadowing Opportunities</p>
                                </Col>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">Internships</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">College Access Programs</p>
                                </Col>
                                <Col xs={6}>
                                    <img src="https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg" alt="graphic of doctor" className="width-100" />
                                    <p className="font-size-12">Workshops</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <h2>Join Us!</h2>
                        <hr />
                        <p className="font-size-12">
                            Health career pathways provide an opportunity for students from diverse backgrounds to explore health careers through experiential learning.
                            <br />
                            <br />
                            Help us create a health workforce that is reflective of the people of our communities by adding your program to our map. This can be done by filling out the NWHCP survey. Help us spread the word!
                        </p>
                    </div>
                </div>
                <SupportFooter />
            </div>
        )
    }
}