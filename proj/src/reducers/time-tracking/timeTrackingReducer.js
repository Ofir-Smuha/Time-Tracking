import { handleActions } from 'redux-actions';
import { set } from 'lodash/fp'

import timeSet from './timeSetReducer'

const initialState = {
  offset: 0,
  dates: [],
  hours: {},
  displayHours: false
};

export default handleActions({
  SET_DATES: (state, { dates }) => 
    set('dates', dates, state )
  ,
  UPDATE_OFFSET: (state, action) => 
    set('offset', timeSet(state, action), state)
  ,
  CHANGE_TIME: (state, {hoursValue, id}) => 
    set(['hours', id], hoursValue, state)

}, initialState);