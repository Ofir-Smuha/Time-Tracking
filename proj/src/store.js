import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import rootReducer from 'reducers/root'

const middleWare = [thunk]

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;