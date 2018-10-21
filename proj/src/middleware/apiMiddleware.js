import axios from 'axios';
import { get } from 'lodash/fp';

const apiMiddleware = ({dispatch}) => next => action => {

  if (!get('meta.type', action)) { 
    return next(action);
  };
  
  const { url, method = 'get' } = action.meta;
  const { onSuccess, onError} = action.payload

  axios.request({url, method})
    .then(({data}) => {
      if(Array.isArray(onSuccess)) {
        onSuccess.forEach(action => dispatch(action(data)))
      } else {
        dispatch(action.payload.onSuccess(data))
      }
      })
      .catch( err => dispatch(onError(err)));
};

export default apiMiddleware;