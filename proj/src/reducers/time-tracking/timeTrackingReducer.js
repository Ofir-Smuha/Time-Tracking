import { handleActions, combineActions } from 'redux-actions';
import { set } from 'lodash/fp'

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
  UPDATE_OFFSET: (state, { offset }) => {
    if(offset === 7) {
      return set('offset', state.offset + 7, state)
    }
    return set('offset', state.offset - 7, state)
  },
  CHANGE_TIME: (state, {hoursValue, id}) => 
    set(['hours', id], hoursValue, state)

}, initialState);