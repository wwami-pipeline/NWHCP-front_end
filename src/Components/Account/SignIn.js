import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col,
    Form, FormGroup, Input, Label, Button } from 'reactstrap';

export class SignIn extends Component {
    render() {
        return (
            <Container>
                <p>Sign in to continue</p>

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