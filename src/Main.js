import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MapPage from 'pages/Map/MapPage';
import ProgramPageContainer from 'pages/OrgDetail/ProgramPageContainer';
import More from 'pages/More/More'
import Resources from 'pages/Resources/Resources'
import NotFound from 'pages/NotFound/NotFound'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/map' activeClassName='current' component={MapPage} />
        <Route exact path='/more' activeClassName='current' component={More} />
        <Route exact path='/resources' activeClassName='current' component={Resources} />
        <Route exact path='/org:id' activeClassName='current' render={(props) => <ProgramPageContainer {...props} />} />
        <Route component={NotFound}></Route>
      </Switch>
    </main>
  )
}

export default Main
