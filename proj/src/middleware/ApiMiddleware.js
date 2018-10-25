import axios from 'axios';
import { get } from 'lodash/fp';

const apiMiddleware = ({dispatch}) => next => action => {
  if (get('meta.type', action) !== 'api') { 
    return next(action);
  };
  
  const { url, method = 'get' } = action.meta;
  const { onSuccess, onError} = action.payload

  axios.request({url, method})
    .then(({data}) => {
      if(Array.isArray(onSuccess)) {
        onSuccess.forEach(action => dispatch(action(data)))
      } else {
        dispatch(onSuccess(data))
      }
    })
    .catch( err => {
      if(Array.isArray(onError)) {
        onError.forEach(action => dispatch(action()))
      } else {
        dispatch(onError(err))
      };
    });
};

export default apiMiddleware;