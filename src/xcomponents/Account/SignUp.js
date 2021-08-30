import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { addUser } from '../../redux/ActionCreators';

// const mapDispatchToProps = {
//     addUser: (email, password) => addUser(email, password)
// }

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(event) {
        // this.props.addUser(this.email.value, this.password.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <p>Sign up</p>
                    <Form onSubmit={this.handleSignUp}>
                        <Form.Group>
                            <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                            <Form.Input type="text" id="email" name="email" placeholder="Email"
                                        innerRef={input => this.email = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password" className="form-label">Password</Form.Label>
                            <Form.Input type="text" id="password" name="password" placeholder="Password"
                                        innerRef={input => this.password = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="confirmPassword" className="form-label">Confirm Password</Form.Label>
                            <Form.Input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"
                                        innerRef={input => this.confirmPassword = input} />
                        </Form.Group>
                
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

// export default connect(null, mapDispatchToProps)(SignUp);
export default SignUp;