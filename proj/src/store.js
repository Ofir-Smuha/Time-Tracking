import { createStore, compose, applyMiddleware} from 'redux'
import persistState from 'redux-localstorage'

import rootReducer from 'reducers/root'
import loggingMiddleware from 'middleware/loggingMiddleware';
import projectsMiddleware from 'middleware/projectsMiddleware';
import statisticsMiddleware from 'middleware/statisticsMiddleware';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      statisticsMiddleware,
      projectsMiddleware,
      loggingMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;