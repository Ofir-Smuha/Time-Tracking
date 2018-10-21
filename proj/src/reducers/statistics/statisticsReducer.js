import { handleActions } from 'redux-actions';

const initialState = [];

export default handleActions({
  SET_STATISTICS: (state, {data}) => {
    return data
  }
}, initialState);