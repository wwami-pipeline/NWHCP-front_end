import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/account-settings.scss';

const AccountSettings = (props) => {
    const user = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        joinDate: '05-09-2021',
        email: 'example123@example.com',
        favorites: []
    };

    function changeEmail(event) {
        // do stuff
        event.preventDefault();
    }

    function changePassword(event) {
        // do stuff
        event.preventDefault();
    }

    return (
        <div className='px-2'>
            <h2 className='pb-2'>Account Settings</h2>
            
            <div className='light-blue-bg'>
                <h3>About You</h3>
                <h5>Name</h5>
                <p>{user.firstName + ' ' + user.lastName}</p>
                <h5>Joined</h5>
                <p>{user.joinDate}</p>
            </div>

            <div className='light-blue-bg'>
                <h3>Email</h3>
                <h5>Current Email</h5>
                <p>{user.email}</p>
                <hr />
                <h3>Change Email</h3>
                <Form onSubmit={changeEmail}>
                    <Form.Group>
                        <Form.Label htmlFor='newEmail'>
                            New Email
                        </Form.Label>
                        <Form.Control
                            type='text'
                            id='newEmail'
                            name='newEmail'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='confirmEmail'>
                            Confirm New Email
                        </Form.Label>
                        <Form.Control
                            type='text'
                            id='confirmEmail'
                            name='confirmEmail'
                        />
                    </Form.Group>
                    <Button
                        type='submit'
                        value='submit'
                        color='primary'
                        className='w-100'
                    >
                        Change Email
                    </Button>
                </Form>
            </div>

            <div className='light-blue-bg'>
                <h3>Password</h3>
                <Form onSubmit={changePassword}>
                    <Form.Group>
                        <Form.Label htmlFor='currentPassword'>
                            Current Password
                        </Form.Label>
                        <Form.Control
                            type='text'
                            id='currentPassword'
                            name='currentPassword'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='newPassword'>
                            New Password
                        </Form.Label>
                        <Form.Control
                            type='text'
                            id='newPassword'
                            name='newPassword'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='confirmPassword'>
                            Confirm New Password
                        </Form.Label>
                        <Form.Control
                            type='text'
                            id='confirmPassword'
                            name='confirmPassword'
                        />
                    </Form.Group>
                    <Button
                        type='submit'
                        value='submit'
                        variant='primary'
                        className='w-100'
                    >
                        Change Password
                    </Button>
                </Form>
            </div>
            
        </div>
    );
};

export default AccountSettings;
