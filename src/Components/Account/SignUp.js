import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col,
    Form, FormGroup, Input, Label, Button } from 'reactstrap';

export class SignUp extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p>Sign up</p>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="email" className="form-label">Email</Label>
                            <Input type="text" id="email" name="email" placeholder="Email"
                                        innerRef={input => this.email = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" className="form-label">Password</Label>
                            <Input type="text" id="password" name="password" placeholder="Password"
                                        innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="confirmPassword" className="form-label">Confirm Password</Label>
                            <Input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"
                                        innerRef={input => this.confirmPassword = input} />
                        </FormGroup>
                
                        <Button type="submit" value="submit" color="primary" className="w-100">Sign Up</Button>
                    </Form>
                </Container>

                <Row>
                    <Col><hr/></Col>
                    <Col xs={1}>OR</Col>
                    <Col><hr/></Col>
                </Row>

                <small class="d-flex justify-content-center">Already have an account? Sign in <Link to="/">here</Link>.</small>
                
                <div className="blue-background p-3">
                    <h4>Terms and Privacy Statement</h4>
                    <p>University of Washington Online Privacy Statement:</p>
                    <a href="https://www.washington.edu/online/privacy" target="_blank" rel="noreferrer">
                        https://www.washington.edu/online/privacy</a>
                    <p>University of Washington Website Terms and Conditions of Use:</p>
                    <a href="https://www.washington.edu/online/terms" target="_blank" rel="noreferrer">
                        https://www.washington.edu/online/terms</a>
                </div>

            </div>

            
        )
    }
}