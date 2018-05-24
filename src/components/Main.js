import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MapPage from './MapPageTEST';
import FindPrograms from './FindPrograms';
import Test from './Test';
import ProgramPageContainer from './ProgramPageContainer';


const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/locations' activeClassName='current' component={MapPage}/>
        <Route path='/find-programs' activeClassName='current' component={FindPrograms}/>
        <Route path='/test' activeClassName='current' component={Test}/>
        <Route path='/org:id' activeClassName='current' render={(props) => <ProgramPageContainer {...props}/>}/>
      </Switch>
  </main> 
  )
}

export default Main
