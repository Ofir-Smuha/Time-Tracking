import { handleActions } from 'redux-actions';

const initialState = [];

export default handleActions({
  SET_DATA: (state, {data}) => {
    return data
  }
}, initialState);