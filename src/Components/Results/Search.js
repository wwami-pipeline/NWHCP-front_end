import React from 'react';
import { InputGroup, Form, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {
    careers,
    gradeLevels,
    enrollment,
    duration,
    eligibility,
    advanced
} from '../../shared/filters.js';
import './search.scss';

export default function Search(props) {
    /*{
        searchContent: 'seattle',
        CareerEmp: [],
        HasCost: false,
        Under18: false,
        HasTransport: false,
        HasShadow: false,
        GradeLevels: [] 
    }*/
    const caretIcon = <FontAwesomeIcon icon={faCaretDown} className='ml-2' />;

    const handleFormChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        let newState = props.formData;
        if (name === 'CareerEmp' || name === 'GradeLevels') {
            // expects an array
            if (name === 'GradeLevels') value = parseInt(value);
            if (target.checked) {
                newState[name].push(value);
            } else {
                newState[name] = newState[name].filter(
                    (item) => item !== value
                );
            }
        } else {
            // expects true or false
            newState[name] = target.checked;
        }

        console.log(newState[name]);
        props.setFormData(newState);
    };

    return (
        <div className='page-wrapper search-form'>
            <Form onSubmit={props.handleSubmit}>
            
                <Form.Group controlId='formCareerPath'>
                    <Form.Label>Find a career path</Form.Label>
                    <InputGroup>
                        <Form.Control placeholder='Location, keywords, organizations' />
                        <InputGroup.Append>
                            <Button variant='secondary' size='sm'>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId='formLocation'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' placeholder='Seattle, WA' />
                </Form.Group>

                <h3 className='text-primary'>Filters</h3>
                <Accordion defaultActiveKey='0'>
                    <Form.Group controlId='formEducation'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='0'>
                                Education Level{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='0'>
                            <div>
                                {gradeLevels.map((grade) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='GradeLevels'
                                        label={grade.name}
                                        value={grade.id}
                                        onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>

                    <Form.Group controlId='formCareer'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='1'>
                                Career Emphasis{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='1'>
                            <div>
                                {careers.map((career) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='CareerEmp'
                                        label={career}
                                        value={career}
                                        onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>

                    <Form.Group controlId='formEnrollment'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='2'>
                                Enrollment Fee{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='2'>
                            <div>
                                {enrollment.map((cost) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='HasCost'
                                        label={cost}
                                        // value={cost}
                                        // onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>

                    <Form.Group controlId='formDuration'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='3'>
                                Duration{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='3'>
                            <div>
                                {duration.map((item) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='Duration'
                                        label={item}
                                        // value={item}
                                        // onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>

                    <Form.Group controlId='formEligibility'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='4'>
                                Eligibility{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='4'>
                            <div>
                                {eligibility.map((item) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='Eligibility'
                                        label={item}
                                        // value={item}
                                        // onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>

                    <Form.Group controlId='formAdvanced'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='5'>
                                Advanced Options{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='5'>
                            <div>
                                {advanced.map((item) => (
                                    <Form.Check
                                        type='checkbox'
                                        name='Advanced'
                                        label={item}
                                        // value={item}
                                        // onChange={handleFormChange}
                                    />
                                ))}
                            </div>
                        </Accordion.Collapse>
                    </Form.Group>
                </Accordion>

                <div className='text-center pt-3'>
                    <Button size='lg' variant='primary' type='submit'>
                        Apply filters
                    </Button>
                </div>
            </Form>
        </div>
    );
}
