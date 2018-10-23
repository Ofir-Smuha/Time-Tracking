import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import SignUp from 'views/SignUp'
import Login from '../views/Login'
import Projects from '../views/Projects'
import TimeTracking from '../views/TimeTracking'
import Statistics from '../components/statistics/statistics'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/time-tracking" component={TimeTracking}/>
      <Route path="/statistics" component={Statistics}/>
      <Redirect from="/" to="/login"/>
    </Switch>
  </Router>
)
export default AppRouter