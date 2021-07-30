import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

// - Component to display an individual result card for program search.
// - Takes in a prop called program (JSON of health careepathway program info).
export default function ResultCard({ program }) {
    const emphasisList = program.CareerEmp.map((emphasis, index) => {
        return (
            <li key={index} className='w-50'>
                <span className='fa-li'>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                </span>
                {emphasis}
            </li>
        );
    });

    return (
        <Container className='pb-3'>
            <Row>
                <Col xs={10}>
                    <h4 className='text-left'>{program.OrgTitle}</h4>
                    <p>
                        {program.StreetAddress}
                        <br />
                        {`${program.City}, ${
                            program.State
                        } ${program.ZipCode.slice(0, 5)}`}
                        <br />
                        {program.Phone}
                    </p>

                    <ul className='fa-ul d-flex flex-row flex-wrap'>
                        {emphasisList}
                    </ul>

                </Col>
                <Col xs={2}>
                    <h2>
                        <FontAwesomeIcon icon={faStar} />
                    </h2>
                </Col>
            </Row>
            <Button href='#' target='_blank' size='small'>
                More Details
            </Button>
            <hr/>
        </Container>
    );
}
