import { createStore, compose, applyMiddleware} from 'redux'

import rootReducer from 'reducers/root'
import apiMiddleware from 'middleware/apiMiddleware'
import firebaseMiddleware from 'middleware/firebaseMiddleware'

const initialState = {};
const middlewares = [
  firebaseMiddleware,
  apiMiddleware
]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;