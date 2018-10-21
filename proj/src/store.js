import { createStore, compose, applyMiddleware} from 'redux'
// import persistState from 'redux-localstorage'

import rootReducer from 'reducers/root'
import projectsMiddleware from 'middleware/projectsMiddleware';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      projectsMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;