import { combineReducers } from 'redux';

import loginReducer from 'reducers/login/loginReducer'
import projectsReducer from 'reducers/projects/projectsReducer'
import statistics from 'reducers/statistics/statisticsReducer'
import timeTrackingReducer from 'reducers/time-tracking/timeTrackingReducer'

export default combineReducers({
  login: loginReducer,
  projects: projectsReducer,
  statistics: statistics,
  times: timeTrackingReducer
});