import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MapPage from 'pages/Map/MapPage';
import FindPrograms from 'pages/FindPrograms/FindPrograms';
import ProgramPageContainer from 'pages/OrgDetail/ProgramPageContainer';
import About from 'pages/About/About'
import Resources from 'pages/Resources/Resources'
import NotFound from 'pages/NotFound/NotFound'
const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/map' activeClassName='current' component={MapPage}/>
        <Route exact path='/about' activeClassName='current' component={About}/>
        <Route exact path='/resources' activeClassName='current' component={Resources}/>
        <Route exact path='/find-programs' activeClassName='current' component={FindPrograms}/>
        <Route exact path='/org:id' activeClassName='current' render={(props) => <ProgramPageContainer {...props}/>}/>
        <Route component={NotFound}></Route>
      </Switch>
  </main> 
  )
}

export default Main
