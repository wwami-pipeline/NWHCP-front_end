import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import MapPage from 'pages/map/MapPage';
import FindPrograms from 'pages/findPrograms/FindPrograms';
import ProgramPageContainer from 'components/ProgramPageContainer';


const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/locations' activeClassName='current' component={MapPage}/>
        <Route path='/find-programs' activeClassName='current' component={FindPrograms}/>
        <Route path='/org:id' activeClassName='current' render={(props) => <ProgramPageContainer {...props}/>}/>
      </Switch>
  </main> 
  )
}

export default Main
