import React, { Component } from 'react';
import Errors from '../../../Errors/Errors';
import api from '../../../../constants/APIEndpoints/APIEndpoints';
import PageTypes from '../../../../constants/PageTypes/PageTypes';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConf: "",
            resetCode: "",
            resetCodeSent: false,
            error: ""
        }
    }

    sendResetCode = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        const sendData = { email };
        const response = await fetch(api.base + api.handlers.resetPasscode, {
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
        this.setError("");
        alert("A reset code has been sent to your email");
        this.setState({ resetCodeSent: true });
    }

    updatePassword = async (e) => {
        e.preventDefault();
        const { email, password, passwordConf, resetCode } = this.state;
        const sendData = { password, passwordConf, resetCode };
        const response = await fetch(api.base + api.handlers.passwords + email, {
            method: "PUT",
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
        this.setError("");
        alert("Your password has been updated");
    }

    setValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setError = (error) => {
        this.setState({ error });
    }

    render() {
        const { email, password, passwordConf, resetCode, resetCodeSent, error } = this.state;
        return <>
            <Errors error={error} setError={this.setError} />
            {resetCodeSent ?
                <>
                    <form onSubmit={(e) => this.updatePassword(e)}>
                        <div>
                            <span>Password: </span>
                            <input name={"password"} type={"password"} onChange={this.setValue} value={password} />
                        </div>
                        <div>
                            <span>Password Confirmation: </span>
                            <input name={"passwordConf"} type={"password"} onChange={this.setValue} value={passwordConf} />
                        </div>
                        <div>
                            <span>Reset Code: </span>
                            <input name={"resetCode"} onChange={this.setValue} value={resetCode} />
                        </div>
                        <input type="submit" value="Update my password" />
                    </form>
                </>
                :
                <>
                    <form onSubmit={(e) => this.sendResetCode(e)}>
                        <div>
                            <span>Email: </span>
                            <input name={"email"} onChange={this.setValue} value={email} />
                        </div>
                        <input type="submit" value="Send me a reset code" />
                    </form>
                </>}
            <button onClick={(e) => this.props.setPage(e, PageTypes.signIn)}>Back to sign in</button>


        </>

    }



}

export default ForgotPassword;