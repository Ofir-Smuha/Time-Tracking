import { handleActions, combineActions } from 'redux-actions';
import { set } from 'lodash/fp'
const initialState = {
  data: []
};

export default handleActions({
  SET_DATA: (state, {data}) => {
    return set('data', data, state)
  }
}, initialState);