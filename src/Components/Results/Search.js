import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.scss';

export default function Search() {
    const [dataToSend, setDataToSend] = useState({
        searchContent: 'seattle',
        CareerEmp: ['Nursing'],
        HasCost: false,
        Under18: false,
        HasTransport: false,
        HasShadow: false,
        GradeLevels: []
    });

    let onClickSetData = () => {
        setDataToSend();
    };

    // https://stackoverflow.com/questions/63182107/react-bootstrap-get-value-from-form-on-submit
    // TODO:
    // controls need onChange and values props,
    // discuss changing results.js. to functional component
    return (
        <div className='page-wrapper search-form'>
            <Form onSubmit={onClickSetData}>
                <Form.Group controlId='formCareerPath'>
                    <Form.Label>
                        Find a career path
                    </Form.Label>
                    <InputGroup>
                        <Form.Control placeholder='Positions, keywords, organizations' />
                        <InputGroup.Append>
                            <Button
                                variant='secondary'
                                // onClick={onClickSetData}
                                size='sm'
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId='formLocation'>
                    <Form.Label>
                        Location
                    </Form.Label>
                    <Form.Control type="text" placeholder='Seattle, WA' />
                </Form.Group>

                
                <Form.Group controlId='formEducation'>
                    <Form.Label>
                        Education Level
                    </Form.Label>
                    <Form.Check
                        type='checkbox'
                        label='Middle School'
                    />
                    <Form.Check
                        type='checkbox'
                        label='High School'
                    />
                    <Form.Check
                        type='checkbox'
                        label='College/Technical Schools'
                    />
                    <Form.Check
                        type='checkbox'
                        label='Post Bacc'
                    />
                </Form.Group>

                
                <Form.Group controlId='formDuration'>
                    <Form.Label>
                        Duration
                    </Form.Label>
                    <Form.Check
                        type='checkbox'
                        label='Weekday Event (Daytime)'
                    />
                    <Form.Check
                        type='checkbox'
                        label='Weekday Event (Evening)'
                    />
                    <Form.Check
                        type='checkbox'
                        label='Weekends'
                    />
                </Form.Group>

                <div className='text-center pt-3'>
                    <Button size='lg' variant='primary'>
                        Apply filters
                    </Button>
                </div>

            </Form>
        </div>
    );
}
