import React, {Component} from 'react';
import {InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Search extends React.Component {
    render() {
        return (
            <div className="padding-sides">
                <div>
                    <h4 className="font-size-20">Find a career path</h4>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Positions, keyowrds, organizations"
                            aria-label="title name"
                            aria-describedby="basic-addon2"
                            className="font-size-12"
                            />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">:)</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div>
                    <h4 className="font-size-20">Location</h4>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Seattle, WA"
                            aria-label="Location"
                            aria-describedby="basic-addon2"
                            className="font-size-12"
                            />
                    </InputGroup>
                </div>
                <div>
                    <h4 className="font-size-20">Education Level</h4>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Middle School" className="font-size-12"/>
                        <Form.Check type="checkbox" label="High School" className="font-size-12"/>
                        <Form.Check type="checkbox" label="College/Technical Schools" className="font-size-12"/>
                        <Form.Check type="checkbox" label="Post Bacc" className="font-size-12"/>
                    </Form.Group>
                </div>
                <div>
                    <h4 className="font-size-20">Duration</h4>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Weekday Event, Daytime" className="font-size-12" />
                        <Form.Check type="checkbox" label="Weekday Event, Evening" className="font-size-12"/>
                        <Form.Check type="checkbox" label="Weekends" className="font-size-12"/>
                    </Form.Group>
                </div>
                <Button size="lg" className="light-blue-background">Apply filters</Button>
            </div>
        )
    }
}