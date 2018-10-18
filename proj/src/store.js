import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'

import rootReducer from 'reducers/root'

const middleWare = [thunk]

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;