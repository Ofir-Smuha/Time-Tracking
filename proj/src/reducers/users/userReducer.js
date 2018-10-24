import { handleActions, combineActions } from 'redux-actions';
import { set } from 'lodash/fp'

const initialState = {
  currentUser: null
};

export default handleActions({
  SET_LOGGED_IN: (state, { email, userId }) =>
    set('currentUser', {email: email, userId: userId}, state)
  ,
  SET_LOGGED_OUT: (state, action) =>
    set('currentUser', null , state)
}, initialState);