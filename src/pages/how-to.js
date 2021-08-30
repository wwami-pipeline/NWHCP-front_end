import React from 'react';
import '../scss/how-to.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap';
import SupportFooter from '../xcomponents/SupportFooter.js';
import JoinUs from '../xcomponents/JoinUs.js';

const HowTo = () => {

    const check = <span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>;

        return (
            <div>
                <div className="page-wrapper how-to-content">

                    <div>
                        <h2>How the NWHCP Site Works</h2>

                        <p>
                            Our map will link you to a variety of programs that
                            will allow you to:
                        </p>

                        <ul className="fa-ul">
                            <li>{check} Learn about opportunities in the health sciences and STEM</li>
                            <li>{check} Experience hands-on activities</li>
                            <li>{check} Prepare academically</li>
                            <li>{check} Build your resume</li>
                        </ul>

                        {/* <p>
                            <FontAwesomeIcon icon={faMap} /> <b>Explore</b> the
                            wide variety of health careers.
                            <br />
                            <FontAwesomeIcon icon={faLightbulb} /> <b>Learn</b>{' '}
                            about how to become a doctor, nurse, phramacist,
                            social worker, dentist, or therapist.
                            <br />
                            <FontAwesomeIcon icon={faSearch} /> <b>Find</b> out
                            more about health professions that you might not
                            even have heard of, like health administration or
                            health information technology!
                        </p> */}
                    </div>

                    <div>
                        <h2>Included Programs</h2>
                        <Container className='text-center py-2'>
                            <Row>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            alt='graphic of doctor'
                                        />
                                        <Figure.Caption>
                                            After School Programs
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            alt='graphic of doctor'
                                        />
                                        <Figure.Caption>
                                            Summer Camps
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                <Figure>
                                    <Figure.Image
                                        src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                        alt='graphic of doctor'
                                    />
                                    <Figure.Caption>
                                        Shadowing Opportunities
                                    </Figure.Caption>
                                </Figure>
                                </Col>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            alt='graphic of doctor'
                                        />
                                        <Figure.Caption>
                                            Internships
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            alt='graphic of doctor'
                                        />
                                        <Figure.Caption>
                                            College Access Programs
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            alt='graphic of doctor'
                                        />
                                        <Figure.Caption>
                                            Workshops
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                            </Row>
                            <Button variant="primary" size="lg">Start Exploring</Button>
                        </Container>
                    </div>

                    <JoinUs />    
                    
                </div>
                <SupportFooter />
            </div>
        );
}

export default HowTo;