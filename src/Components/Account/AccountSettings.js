import React, { Component } from 'react';
// import { Form, Form.Group, Input, Label } from 'reactstrap';
import { Button, Form } from 'react-bootstrap';


export class AccountSettings extends Component {

    constructor(props) {
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail(event) {
        alert(`New Email: ${this.newEmail.value} Confirm Email: ${this.confirmEmail.value} Password: ${this.password.value}`);
        event.preventDefault();
    }

    changePassword(event) {
        // alert(`New Email: ${this.newEmail.value} Confirm Email: ${this.confirmEmail.value} Password: ${this.password.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>Account Settings</h4>
                <div className="bg-light">
                    <h5>About You</h5>
                    <h6>Name</h6>
                    <p>{this.props.user.FirstName + " " + this.props.user.LastName}</p>
                    <h6>Joined</h6>
                    <p>{this.props.user.JoinDate}</p>
                </div>
                <div className="bg-light">
                    <h5>Email</h5>
                    <h6>Current Email</h6>
                    <p>{this.props.user.email}</p>
                    <h6>Status</h6>
                    <p>{this.props.user.Status}</p>

                    <hr />

                    <h5>Change Email</h5>
                    <Form onSubmit={this.changeEmail}>
                        <Form.Group>
                            <Form.Label htmlFor="newEmail" className="form-label">New Email</Form.Label>
                            <Form.Control type="text" id="newEmail" name="newEmail" placeholder="New Email"
                                        innerRef={input => this.newEmail = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="confirmEmail" className="form-label">Confirm New Email</Form.Label>
                            <Form.Control type="text" id="confirmEmail" name="confirmEmail" placeholder="Confirm New Email"
                                        innerRef={input => this.confirmEmail = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password" className="form-label">Password</Form.Label>
                            <Form.Control type="text" id="password" name="password" placeholder="Password"
                                        innerRef={input => this.password = input} />
                        </Form.Group>
                        
                        <Button type="submit" value="submit" color="primary" className="w-100">Change Email</Button>
                    </Form>
                </div>

                <div className="bg-light">
                    <h5>Password</h5>
                    <Form onSubmit={this.changePassword}>
                        <Form.Group>
                            <Form.Label htmlFor="currentPassword" className="form-label">Current Password</Form.Label>
                            <Form.Control type="text" id="currentPassword" name="currentPassword" placeholder="Current Password"
                                        innerRef={input => this.currentPassword = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="newPassword" className="form-label">New Password</Form.Label>
                            <Form.Control type="text" id="newPassword" name="newPassword" placeholder="New Password"
                                        innerRef={input => this.newPassword = input} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="confirmPassword" className="form-label">Confirm New Password</Form.Label>
                            <Form.Control type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password"
                                        innerRef={input => this.confirmPassword = input} />
                        </Form.Group>
                        
                        <Button type="submit" value="submit" variant="primary" className="w-100">Change Password</Button>
                    </Form>
                </div>
            </div>
        );
    }
}