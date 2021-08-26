import React, { useState } from 'react';
import { Button, ListGroup, Modal, Image, Row, Col } from 'react-bootstrap';
import { navigate } from 'gatsby';
import { gradeLevels } from '../shared/filters';

export const Dialog = ({ show, toggleShow }) => {
    const [whereStudy, setWhereStudy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let params = whereStudy ? '?gradeLvl=' + whereStudy : '';
        navigate('/search-programs' + params);
    };

    return (
        <Modal show={show} onHide={toggleShow} dialogClassName='dialog-rounded'>
            <Modal.Header closeButton />
            <Modal.Body className='text-center'>
                <Modal.Title>Tell us more about you</Modal.Title>
                <h3 className='text-primary pb-3'>
                    Where are you in your life right now?
                </h3>
                <ListGroup defaultActiveKey={whereStudy}>
                    {gradeLevels.map((grade) => {
                        const id = 'grade' + grade.id;
                        return (
                            <ListGroup.Item
                                action
                                href={'#' + id}
                                key={id}
                                onClick={() => setWhereStudy(grade.id.toString())}
                            >
                                <Row className='align-items-center'>
                                    <Col xs={4}>
                                        <Image
                                            src='https://www.freevector.com/uploads/vector/preview/30485/Healthcare_characters_vector_5-01.jpg'
                                            thumbnail
                                        />
                                    </Col>
                                    <Col>
                                        <h3 className='m-0'>{grade.name}</h3>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                <Button onClick={handleSubmit} size='md' className='mt-3'>
                    Next
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <p>
                    Are you an organization looking to add your healthcare
                    program to our database? Join our project by clicking{' '}
                    <a
                        href='https://redcap.iths.org/surveys/?s=3FNCRCFYC9'
                        rel="noreferrer"
                        target='_blank'
                    >
                        here
                    </a>
                    !
                </p>
            </Modal.Footer>
        </Modal>
    );
};
