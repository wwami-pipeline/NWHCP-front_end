import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignForm from '../SignForm/SignForm';
import api from '../../../../xconstants/APIEndpoints/APIEndpoints';
import Errors from '../../../Errors/Errors';
import PageTypes from '../../../../xconstants/PageTypes/PageTypes';
import {Container, Row, Col} from 'react-bootstrap';

/**
 * @class
 * @classdesc SignUp handles the sign up component
 */
class SignUp extends Component {
    static propTypes = {
        setPage: PropTypes.func,
        setAuthToken: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            passwordConf: "",
            error: ""
        };

        this.fields = [
            {
                name: "Email",
                key: "email"
            },
            {
                name: "Password",
                key: "password"
            },
            {
                name: "Password Confirmation",
                key: "passwordConf"
            },
            {
                name: "First name",
                key: "firstName"
            },
            {
                name: "Last name",
                key: "lastName"
            }
        ];
    }

    /**
     * @description setField will set the field for the provided argument
     */
    setField = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    /**
     * @description setError sets the error message
     */
    setError = (error) => {
        this.setState({ error })
    }

    /**
     * @description submitForm handles the form submission
     */
    submitForm = async (e) => {
        e.preventDefault();
        const { email,
            password,
            passwordConf,
            firstName,
            lastName
        } = this.state;
        const sendData = {
            email,
            password,
            passwordConf,
            firstName,
            lastName
        };
        const response = await fetch(api.base + api.handlers.users, {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        if (response.status >= 300) {
            const error = await response.text();
            this.setError(error);
            return;
        }
        const authToken = response.headers.get("Authorization")
        localStorage.setItem("Authorization", authToken);
        this.setError("");
        this.props.setAuthToken(authToken);
        const user = await response.json();
        this.props.setUser(user);
    }

    render() {
        const values = this.state;
        const { error } = this.state;
        return <>
            <Errors error={error} setError={this.setError} />
            <Container>
                <Row>
                    <Col>
                        <SignForm
                            setField={this.setField}
                            submitForm={this.submitForm}
                            values={values}
                            fields={this.fields} />
                    </Col>
                    <Col>
                        <Container>
                            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
                                alt="dark green leaves" />
                            <div className="centered-text">
                                <h4>welcome to</h4>
                                <h3>verdancy</h3>
                                <p>get ready to go green with us!</p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            {/* <button onClick={(e) => this.props.setPage(e, PageTypes.signIn)}>Sign in instead</button> */}
        </>
    }
}

export default SignUp;