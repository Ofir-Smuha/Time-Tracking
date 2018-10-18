import { createStore, compose, applyMiddleware} from 'redux'
import persistState from 'redux-localstorage'

import rootReducer from 'reducers/root'
import loggingMiddleware from 'middleware/loggingMiddleware';
import apiMiddleware from 'middleware/apiMiddleware';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware
    ),
    persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;