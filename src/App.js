import React, {Component} from 'react';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {About} from './Components/About/About';
import {HowTo} from './Components/HowTo/HowTo';
import {Footer} from './Components/Footer/Footer';
import {Results} from './Components/Results/Results';
import {SignIn} from './Components/Account/SignIn';
import SignUp from './Components/Account/SignUp';
import {AccountSettings} from './Components/Account/AccountSettings';
import SingleResult from './Components/SingleResult/SingleResult';
import { faParking } from '@fortawesome/free-solid-svg-icons';

/* 
// --- Redux Config ---
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
*/

// function App() {
class App extends Component {
    render() {
        return (
            // <Provider store={store}>
                <Router basename={process.env.PUBLIC_URL} >
                    <div>
                        <Navbar bg="light" expand="sm">
                            <Navbar.Brand as={Link} to="/" id="navbar-brand">NWHCP</Navbar.Brand>
                            <Navbar.Toggle area-controls="basic-navbar-nav" />
                            <Navbar.Collapse>
                                <Nav>
                                    <Link to="/" className="nav-link" exact>Home</Link>
                                    <Link to="/search" className="nav-link" exact>Find Programs</Link>
                                    <Link to="/post-opportunity" className="nav-link" exact>Post Opportunity</Link>
                                    <Link to="/about" className="nav-link" exact>About</Link>
                                    <Link to="/how-to" className="nav-link" exact>How To</Link>
                                    <Link to="/account" className="nav-link" exact>Account</Link>
                                    {/* <div>
                                        {this.state.isSignedIn ?
                                            <Button onClick={this.test}>Sign-Out</Button> :
                                        <Link to='/login' className="nav-link" exact>Login</Link> }
                
                                    </div> */}
                
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        {/* <div className="push"></div> */}
                        <Switch>
                            <Route exact path="/" component={About}></Route>
                            <Route exact path="/about" component={About}></Route>
                            <Route exact path="/how-to" component={HowTo} />
                            <Route exact path="/search" component={Results} />
                            <Route exact path="/single-result" component={SingleResult} />
                            <Route exact path="/signin" component={SignIn}>
                                {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                                    :
                                    <SignIn setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
                
                                } */}
                            </Route>
                            <Route exact path="/signup" component={SignUp}>
                                {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                                    :
                                    <SignUp setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
                                } */}
                            </Route>
                            {/* <Route exact path="/account-settings" component={AccountSettings} /> */}
                            <Route exact path="/account-settings" render={() =>
                                <AccountSettings user={
                                    {
                                        FirstName: "Cody",
                                        LastName: "Park",
                                        JoinDate: "02-02-2021",
                                        Email: "cody123@gmail.com",
                                        Status: "Confirmed"
                                    }
                                }/> } />
                        </Switch>
                        <Footer/>
                    </div>
                        </Router>
            // </Provider>
        );
    }
  
}

export default App;
