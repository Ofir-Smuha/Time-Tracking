import { handleActions, combineActions } from 'redux-actions';
import { set, flow } from 'lodash/fp'

const initialState = {
  email: null,
  userId: null
}

export default handleActions({
  SET_LOGGED_IN: (state, { email, userId }) => {
    return {email, userId}
  }
  ,
  SET_LOGGED_OUT: (state, action) => {
    return {email: null, userId: null}
  }
}, initialState);