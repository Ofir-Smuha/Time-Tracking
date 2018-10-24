import { combineReducers } from 'redux';

import userReducer from 'reducers/users/userReducer'
import projectsReducer from 'reducers/projects/projectsReducer'
import statistics from 'reducers/statistics/statisticsReducer'
import timeTrackingReducer from 'reducers/time-tracking/timeTrackingReducer'

export default combineReducers({
  currentUser: userReducer,
  projects: projectsReducer,
  statistics: statistics,
  times: timeTrackingReducer
});