import React, {Component} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export class PleaseSignIn extends React.Component {
    render() {
        return(
          <section>
            <div className="container" id="please-sign-in">
                <h2>uh oh!</h2>
                <p>It looks like you need to be signed into an account to view this page!</p>
                <p>Please <Link to="/signup" className="link">create an account</Link>,
                or <Link to="/signin" className="link">sign in</Link> if you already have one.</p>
                <div className="centered">
                  <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/carrot.png?token=AKMRZNUXRY5NX576E36QISDATLEQQ"
                  alt="sad carrot"/>
                </div>
            </div>
          </section>
        )
    }
}
