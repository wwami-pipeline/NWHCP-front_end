import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export class SignIn extends Component {
    render() {
        return (
            <Container>
                <p>Sign in to continue</p>

                <Form onSubmit={this.handleLogin}>
                    <Form.Group>
                        <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                        <Form.Control type="text" id="email" name="email" placeholder="Email"
                                    innerRef={input => this.email = input} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password" className="form-label">Password</Form.Label>
                        <Form.Control type="text" id="password" name="password" placeholder="Password"
                                    innerRef={input => this.password = input} />
                    </Form.Group>
                    <small class="d-flex justify-content-end"><Link to="/">Forgot your password?</Link></small>
                    <Button type="submit" value="submit" color="primary" className="w-100">Sign In</Button>
                </Form>

                <Row>
                    <Col><hr/></Col>
                    <Col xs={1}>OR</Col>
                    <Col><hr/></Col>
                </Row>

                <small class="d-flex justify-content-center">No account yet? Sign up <Link to="/">here</Link>.</small>

            </Container>
        )
    }
}