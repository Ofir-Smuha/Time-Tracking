import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from '../views/Login'
import Projects from '../views/Projects'
import TimeTracking from '../views/TimeTracking'


const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/time-tracking" component={TimeTracking}/>
    </Switch>
  </Router>
)
export default AppRouter