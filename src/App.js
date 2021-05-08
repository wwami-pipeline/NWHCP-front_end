import { Component } from 'react';
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
import SingleResult from './Components/SingleResult/SingleResult';

// function App() {
class App extends Component {
    render() {
        return (
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
                        <Route exact path="/signin">
                            {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                                :
                                <SignIn setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
                    
                            } */}
                        </Route>
                        <Route exact path="/signup">
                            {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                                :
                                <SignUp setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
                            } */}
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
        </Router>
        );
    }
  
}

export default App;
