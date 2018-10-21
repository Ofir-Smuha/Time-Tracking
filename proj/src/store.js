import { createStore, compose, applyMiddleware} from 'redux'
// import persistState from 'redux-localstorage'

import rootReducer from 'reducers/root'
import apiMiddleware from 'middleware/ApiMiddleware';
// import firebaseMiddleware from 'middleware/firebaseMiddleware'

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      apiMiddleware,
      // firebaseMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;