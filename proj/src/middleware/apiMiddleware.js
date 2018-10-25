import axios from 'axios';
import { get } from 'lodash/fp';

const dispatchActions  = (dispatch, arr, data) => {
  arr.forEach(action => dispatch(action(data)))
}

const apiMiddleware = ({dispatch}) => next => action => {
  if (!get('meta.type', action)) {
    return next(action);
  };

  const { url, method = 'get' } = action.meta;
  const { onSuccess, onError} = action.payload

  axios.request({url, method})
    .then(({data}) => {
      if(Array.isArray(onSuccess)) {
        dispatchActions(dispatch, onSuccess, data)
      } else {
        dispatch(onSuccess(data))
      }
    })
    .catch( err => {
      if(Array.isArray(onError)) {
        dispatchActions(dispatch, onError, err)
      } else {
        dispatch(onError())
      };
    });
};

export default apiMiddleware;