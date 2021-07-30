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

// To Do:
// - Search by location & radius
// - Clear filters button

// Issues:
// - API only appears to search for keywords in org name & address
// - Can't search by zipcode
// - Selecting multiple filters in one category searches for one OR the other

export default function Search(props) {
    /*{
        searchContent: '',
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
        const name = target.name;
        let value = target.value;
        let newState = props.formData;

        if (name === 'CareerEmp' || name === 'GradeLevels') {
            // expects an array
            if (name === 'GradeLevels') value = parseInt(value);
            newState[name] = target.checked
                ? [...newState[name], value]
                : newState[name].filter((item) => item !== value);
        } else if (target.type === 'checkbox') {
            // expects true or false
            newState[name] = target.checked;
        } else {
            // searchbar input
            newState[name] = value;
        }

        // console.log(newState[name]);
        props.setFormData(newState);
    };

    return (
        <div className='page-wrapper search-form'>
            {/* Search by keyword */}
            <Form onSubmit={props.handleSubmit}>
                <Form.Group>
                    <Form.Label>Find a Career Path</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type='text'
                            name='searchContent'
                            placeholder='Search by keyword'
                            onChange={handleFormChange}
                        />
                        <InputGroup.Append>
                            <Button variant='secondary' size='sm' type='submit'>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>

            {/* Search by Location */}
            <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId='formLocation'>
                    <Form.Label>Location</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type='text'
                            placeholder='Zipcode or City, State'
                        />
                        <InputGroup.Append>
                            <Button variant='secondary' size='sm' type='submit'>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>

            {/* Filters */}

            <div className='pb-3'>
                <Button variant='secondary' onClick={props.clickFilterButton}>Select Filters</Button>
                <a role='button' onClick='' className='pl-2'>
                    Clear Filters
                </a>
            </div>

            <Form onSubmit={props.handleSubmit} className={props.toggleFilters}>
                {/* <h3 className='text-primary py-3'>Filters</h3> */}
                <Accordion defaultActiveKey='0'>
                    <Form.Group controlId='formEducation'>
                        <Form.Label>
                            <Accordion.Toggle as={Form.Label} eventKey='0'>
                                Education Level{caretIcon}
                            </Accordion.Toggle>
                        </Form.Label>
                        <Accordion.Collapse eventKey='0'>
                            <div>
                                <Form.Check className='d-none'></Form.Check>
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
                                <Form.Check className='d-none'></Form.Check>
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
                                <Form.Check className='d-none'></Form.Check>
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
                                <Form.Check className='d-none'></Form.Check>
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
                                <Form.Check className='d-none'></Form.Check>
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
                                <Form.Check className='d-none'></Form.Check>
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
