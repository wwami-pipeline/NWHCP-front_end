import React from 'react';
import PropTypes from 'prop-types';
import PageTypes from '../../Constants/PageTypes/PageTypes';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

/**
 * @class Auth
 * @description This is an auth object that controls what page
 * is loaded based on sign up or sign in state
 * Auth code is provided by INFO 441 TA's
 */
const Auth = ({ page, setPage, setAuthToken, setUser }) => {
    switch (page) {
        case PageTypes.signUp:
            return <SignUp setPage={setPage} setAuthToken={setAuthToken} setUser={setUser} />
        case PageTypes.signIn:
            return <SignIn setPage={setPage} setAuthToken={setAuthToken} setUser={setUser} />
        case PageTypes.forgotPassword:
            return <ForgotPassword setPage={setPage} />;
        default:
            return <>Error, invalid path reached</>
    }
}

Auth.propTypes = {
    page: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
    setAuthToken: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default Auth;