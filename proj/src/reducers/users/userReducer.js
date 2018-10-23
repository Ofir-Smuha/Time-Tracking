import { handleActions, combineActions } from 'redux-actions';
import { set } from 'lodash/fp'

const initialState = {
  currUser: null
};

export default handleActions({
  SET_LOGGED_IN: (state, { email, userId }) =>
    set('currUser', {email: email, userId: userId}, state)
  ,
  SET_LOGGED_OUT: (state, action) =>
    set('currUser', null , state)
}, initialState);