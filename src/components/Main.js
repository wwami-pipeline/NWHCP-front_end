import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import MapPage from './MapPage'
import Search from './Search'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/map' component={MapPage}/>
      <Route path='/search' component={Search}/>
    </Switch>
  </main>
)

export default Main
